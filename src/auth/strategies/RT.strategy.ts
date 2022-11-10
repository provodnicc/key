import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { GetUserDto } from "src/users/dtos/get-user.dto";

@Injectable()
export class RTStrategy extends PassportStrategy(Strategy, 'rt-strategy'){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req: Request)=>{
                    const token = req.cookies['refreshToken']
                    if(!token){
                        throw new HttpException('Пользователь не авторизован', HttpStatus.UNAUTHORIZED)
                    }
                    return token
                }
            ]),
            ignoreExpiration: true,
            secretOrKey: process.env.JWT_SECRET
        })
    }

    async validate(payload: any){
        
        return new GetUserDto(payload)
    }
}