import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Cron } from '@nestjs/schedule';
import { AppService } from './app.service';
import { CompareItemsService } from './compare-items/compare-items.service';
import { CompareRequestPayload, CryptoResponse } from './types';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly compareItemsService: CompareItemsService,
  ) {}

  @MessagePattern('compare-request')
  async compare(
    @Payload() payload: CompareRequestPayload,
  ): Promise<CryptoResponse> {
    const fetchedFromApi = await this.appService.fetchCryptoComparator(payload);
    if (fetchedFromApi) {
      return fetchedFromApi;
    }

    return await this.compareItemsService.getFromDB(payload);
  }

  @Cron('* 2 * * * *')
  async handleCron() {
    const scheduledFetch = await this.appService.scheduledFetch();
    if (scheduledFetch) this.compareItemsService.create(scheduledFetch);
  }
}
