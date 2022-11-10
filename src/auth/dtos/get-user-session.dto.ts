import { User } from "src/users/entities/user.entity"

export class GetUserSession{
    id: number
    host: string
    agent: string
    token: string
    user: User
    constructor(model: any){
        this.id = model.id
        this.host = model.host
        this.agent = model.agent
        this.token = model.token
        this.user = model.user
    }
}