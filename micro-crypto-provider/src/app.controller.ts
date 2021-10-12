import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CompareItemsService } from './compare-items/compare-items.service';
import type { CompareRequestPayload } from './types';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly compareItemsService: CompareItemsService,
  ) {}

  @MessagePattern('compare-request')
  compare(@Payload() payload: CompareRequestPayload): void {
  }
}
