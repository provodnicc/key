import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from './entities/token.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokensService {
    constructor(
        @InjectRepository(Token)
        private tokenRepository: Repository<Token>,
        private jwtService: JwtService
    ){}
    async saveToken(token: string){
        return await this.tokenRepository.save({refreshToken: token})
    }

    async deleteToken(token: string){
        const rt = await this.tokenRepository.findOneBy({refreshToken: token})
        if(!rt){
            throw new UnauthorizedException()
        }
        await this.tokenRepository.remove(rt)
    }

    async generateTokens(payload: any){
        return {
            refreshToken: this.jwtService.sign({...payload}, {expiresIn: '1h', secret: process.env.JWT_SECRET}),
            accessToken: this.jwtService.sign({...payload}, {expiresIn: '30m', secret: process.env.JWT_SECRET})
        }
    }
}
