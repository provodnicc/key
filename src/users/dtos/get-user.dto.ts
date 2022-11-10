import { Injectable } from "@nestjs/common";

@Injectable()
export class GetUserDto{
    id: number
    email: string
    role: string
    constructor(model: any){
        this.id=model.id
        this.email=model.email
        this.role=model.role
    }
}