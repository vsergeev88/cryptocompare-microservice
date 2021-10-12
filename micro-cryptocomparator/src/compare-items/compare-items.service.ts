import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CompareItem } from './compare-item.model';
import { CompareRequestPayload, CryptoResponse } from '../types';
import { serializeResponse } from '../utils';

@Injectable()
export class CompareItemsService {
  constructor(
    @InjectModel(CompareItem)
    private readonly compareItemModel: typeof CompareItem,
  ) {}

  create(createItemDto: CryptoResponse): Promise<CompareItem> {
    const item = new CompareItem();
    item.data = JSON.stringify(createItemDto);

    return item.save();
  }

  async findLatest(): Promise<CompareItem> {
    return this.compareItemModel.findOne({
      order: [['createdAt', 'DESC']],
    });
  }

  async getFromDB(payload: CompareRequestPayload): Promise<CryptoResponse> {
    const result = await this.findLatest();
    const parsedData = JSON.parse(result.data) as CryptoResponse;
    return serializeResponse(parsedData, payload);
  }
}
