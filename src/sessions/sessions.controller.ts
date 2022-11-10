import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AccessGuard } from '../auth/guards/ac.guard';
import { GetUserDto } from 'src/users/dtos/get-user.dto';
import { SessionsService } from './sessions.service';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @UseGuards(AccessGuard)
  @Get('get-all')
  async getByUser(
    @Req()
    req: Request
  ){
    const user = new GetUserDto(req.user)
    const sessions = await this.sessionsService.getUserSession(user)
    return sessions
  }
}