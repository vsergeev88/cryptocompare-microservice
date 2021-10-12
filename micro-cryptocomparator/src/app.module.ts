import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompareItemsModule } from './compare-items/compare-items.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      expandVariables: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadModels: true,
      synchronize: true,
    }),
    ScheduleModule.forRoot(),
    CompareItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
