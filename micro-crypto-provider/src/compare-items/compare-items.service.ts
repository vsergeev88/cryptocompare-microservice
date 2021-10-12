import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateItemDto } from './dto/create-item.dto';
import { CompareItem } from './compare-item.model';
import { ResponseCurrency } from '../types';
import { serializeResponse } from '../utils';

@Injectable()
export class CompareItemsService {
  constructor(
    @InjectModel(CompareItem)
    private readonly compareItemModel: typeof CompareItem,
  ) {}

  create(createItemDto: CreateItemDto): Promise<CompareItem> {
    const item = new CompareItem();
    item.data = createItemDto.data;

    return item.save();
  }

  async findLatest(): Promise<CompareItem> {
    return this.compareItemModel.findOne({
      order: [['createdAt', 'DESC']],
    });
  }

  dropTable(): Promise<void> {
    return this.compareItemModel.drop();
  }

  async getFromDB(): Promise<ResponseCurrency> {
    const data = await this.findLatest();
    return serializeResponse(data);
  }
}
