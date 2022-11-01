import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from './entities/token.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import {JwtModule} from '@nestjs/jwt'
import { RTStrategy } from './strategies/RT.strategy';
import { ATStrategy } from './strategies/AT.strategy';
@Module({
  imports: [
    TypeOrmModule.forFeature([Token]),
    JwtModule.register({}),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, RTStrategy, ATStrategy]
})
export class AuthModule {}
