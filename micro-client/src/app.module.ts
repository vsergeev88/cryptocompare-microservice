import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CryptoComparatorModule } from './cryptocompare/cryptocompare.module';

@Module({
  imports: [
    CryptoComparatorModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      expandVariables: true,
    }),
  ],
})
export class AppModule {}
