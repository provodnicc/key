import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUserDto } from 'src/users/dtos/get-user.dto';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { SignInDto } from './dtos/sign-in.dto';
import { SignUpDto } from './dtos/sign-up.dto';
import { Token } from './entities/token.entity';
import * as argon2 from 'argon2'
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Token)
        private tokenRepository: Repository<Token>,
        private usersService: UsersService,
        private jwtService: JwtService
    ){}

    async signUp(signUpDto: SignUpDto){
        const user = await this.usersService.getUserByEmail(signUpDto.email)
        if(user){
            throw new HttpException('пользователь уже существует', HttpStatus.CONFLICT)
        }
        const newUser = await this.usersService.create(signUpDto)
        if(!newUser){
            throw new HttpException('пользователь не был создан', HttpStatus.INTERNAL_SERVER_ERROR)

        }
        const userDto = new GetUserDto(newUser)
        return userDto
    }

    async signIn(signInDto: SignInDto){
        const user = await this.usersService.getUserByEmail(signInDto.email)
        if(!user){
            throw new HttpException('пользователь не существует', HttpStatus.NOT_FOUND)
        }
        const isEquals = await argon2.verify(user.password, signInDto.password)
        if(!isEquals){
            throw new HttpException('Пароль неверый', HttpStatus.CONFLICT)
        }
        const userDto = new GetUserDto(user)
        const tokens = await this.generateTokens({...userDto})
        await this.saveToken(tokens.refreshToken)
        return {userDto, ...tokens}
    }

    async saveToken(token: string){
        await this.tokenRepository.save({refreshToken: token})
    }

    async generateTokens(payload: any){
        return {
            refreshToken: this.jwtService.sign(payload, {expiresIn: '1h', secret: process.env.JWT_SECRET}),
            accessToken: this.jwtService.sign(payload, {expiresIn: '30m', secret: process.env.JWT_SECRET})
        }
    }
}