import { JwtStrategy } from './auth/shared/jwt.strategy';
import { LocalStrategy } from './auth/shared/local.strategy';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://erca:erca123@fabioteste.7iby2.mongodb.net/test?retryWrites=true&w=majority',
    ),
    AuthModule,
    UsersModule,
    TasksModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],

})
export class AppModule {}
