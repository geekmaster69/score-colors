import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './entities/score.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true, // Lo hace disponible en todo el proyecto
    }),
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Score],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Score]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
