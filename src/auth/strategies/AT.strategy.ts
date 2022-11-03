import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import {Strategy, ExtractJwt} from 'passport-jwt'

@Injectable()
export class ATStrategy extends PassportStrategy(Strategy, 'at-strategy'){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        })
    }

    async validate(payload: any, req: Request){
        return payload
    }
}
