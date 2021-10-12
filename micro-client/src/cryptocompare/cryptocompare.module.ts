import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Constants } from '../common/constants.enum';
import { CryptoCompareController } from './cryptocompare.controller';

@Module({
  imports: [
    ConfigModule,
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        name: Constants.CRYPTOCOMPARE_SERVICE,
        useFactory: (config: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [config.get('AMWP_URL')],
            queue: config.get('LOGGER_AMWP_QUEUE'),
            queueOptions: {
              durable: false,
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [CryptoCompareController],
})
export class CryptoComparatorModule {}
