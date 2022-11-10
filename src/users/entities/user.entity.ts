import { UserSession } from "../../sessions/entities/session.entity";
import { Role } from "../../auth/enums/roles.enum";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column({default: Role.USER})
    role: string

    @OneToMany(()=>UserSession, (usersession)=>usersession.user)
    sessions: UserSession[]
}