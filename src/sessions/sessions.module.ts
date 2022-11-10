import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSession } from './entities/session.entity';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserSession]),
    UsersModule
  ],
  controllers: [SessionsController],
  providers: [SessionsService, UsersService]
})
export class SessionsModule {}
