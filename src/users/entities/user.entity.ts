import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum Roles{
    USER = 'user',
    ADMIN = 'admin',
    EDITOR = 'editor'
}

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column({default: Roles.USER})
    role: string
}