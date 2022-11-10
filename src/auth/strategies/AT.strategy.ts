import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import {Strategy, ExtractJwt} from 'passport-jwt'
import { GetUserDto } from 'src/users/dtos/get-user.dto';

@Injectable()
export class ATStrategy extends PassportStrategy(Strategy, 'at-strategy'){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        })
    }

    async validate(payload: any){
        return new GetUserDto(payload)
    }
}
