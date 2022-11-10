import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from 'src/tokens/entities/token.entity';
import { GetUserDto } from 'src/users/dtos/get-user.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { UserSession } from './entities/session.entity';

@Injectable()
export class SessionsService {
    constructor(
        @InjectRepository(UserSession)
        private sessionRepository: Repository<UserSession>,
        private usersService: UsersService
    ){}

    async getUserSession(user: GetUserDto){
        const findedUser = await this.usersService.getUserById(user.id)
        return await this.getByUser(findedUser)
    }

    async create(
        host: string,
        agent: string,
        token: Token,
        user: User
    ){
        const session = this.sessionRepository.create()
        session.host = host
        session.agent = agent
        session.token = token
        session.user = user
        await this.usersService.update(user)

        return await this.sessionRepository.save(session)
    }

    async update(session: UserSession){
        session.createdAt = new Date()
        return await this.sessionRepository.save(session)
    }

    async getByHostInfo(
        host: string,
        agent: string,
        user: User
    ){
        return await this.sessionRepository.findOneBy(
            {
                host: host,
                agent:agent,
                user: user
            }
        )
    }


    async getByUser(user: User){
        return await this.sessionRepository.findBy({user: user})
    }
}
