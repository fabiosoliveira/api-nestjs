import { LocalStrategy } from './shared/local.strategy';
import { JwtStrategy } from './shared/jwt.strategy';
import { AuthController } from './auth.controller';
import { UsersModule } from './../users/users.module';
import { AuthService } from './shared/auth.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule, 
    PassportModule, 
    JwtModule.register({
      secret: process.env.SECRET_KEY || "sdfaf9890842",
      signOptions: {expiresIn: '60s'}
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService, 
    LocalStrategy, 
    JwtStrategy
  ],
  // exports: [AuthService],
})
export class AuthModule {}
