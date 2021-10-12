import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CompareItemsService } from './compare-items/compare-items.service';
import type { CompareRequestPayload, Response } from './types';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly compareItemsService: CompareItemsService,
  ) {}

  @MessagePattern('compare-request')
  async compare(@Payload() payload: CompareRequestPayload): Promise<Response> {
    const fetchedFromApi = await this.appService.fetchCryptoComparator(payload)
    if (fetchedFromApi) {
      return fetchedFromApi
    }

    return await this.compareItemsService.getFromDB(payload)
  }
}
