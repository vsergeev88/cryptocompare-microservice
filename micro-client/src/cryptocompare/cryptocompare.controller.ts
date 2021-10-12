import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Constants } from '../common/constants.enum';
import { MessageDto } from './dto/message.dto';

@Controller('cryptocompare')
export class CryptoCompareController {
  constructor(
    @Inject(Constants.CRYPTOCOMPARE_SERVICE) private client: ClientProxy,
  ) {}

  @Post('compare-request')
  async requestHandler(@Body() { fsyms, tsyms }: MessageDto): Promise<any> {
    return await this.client.send('compare-request', { fsyms, tsyms });
  }
}
