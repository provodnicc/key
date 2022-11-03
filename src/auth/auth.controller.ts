import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { Roles } from './decorators/roles.decorator';
import { SignInDto } from './dtos/sign-in.dto';
import { SignUpDto } from './dtos/sign-up.dto';
import { Role } from './enums/roles.enum';
import { JWTAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { RTStrategy } from './strategies/RT.strategy';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }
  @Post('sign-up')
  async signUp(
    @Body()
    signUpDto: SignUpDto
  ){
    
    return await this.authService.signUp(signUpDto)
  }

  @Post('sign-in')
  async signIn(
    @Res({passthrough: true })
    res: Response,
    @Body()
    signInDto: SignInDto
  ){
    const context = await this.authService.signIn(signInDto)
    this.setCookie(res, context.refreshToken)
    return context
  }

  @UseGuards(JWTAuthGuard)
  @Get('logout')
  async logOut(
    @Res({passthrough: true})
    res: Response
  ){
    res.clearCookie('refreshToken')
  }

  async setCookie(res: Response, refreshToken: string){
    res.cookie(
      'refreshToken',
      refreshToken,
      {
        maxAge: 1000*60*60,
        httpOnly:true,
        secure: process.env.DEBUG? false : true
      }
    )
    return res
  }

  @UseGuards(JWTAuthGuard, RolesGuard)
  @Get('check')
  @Roles(Role.ADMIN)
  async check(@Req() req){
    // console.log(req)
    return req.user
  }
}
