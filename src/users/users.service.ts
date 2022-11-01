import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as argon2 from 'argon2'
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}
    
    async create(user: CreateUserDto){
        const encrypted = user
        encrypted.password = await argon2.hash(encrypted.password)
        return await this.userRepository.save(encrypted)
    }

    async getUserById(id: number){
        const user = await this.userRepository.findOneBy({id: id})
        return user
    }

    async getUserByEmail(email: string){
        const user = await this.userRepository.findOneBy({email: email})
        return user
    }
}
