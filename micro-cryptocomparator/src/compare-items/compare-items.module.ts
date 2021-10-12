import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompareItem } from './compare-item.model';
import { CompareItemsService } from './compare-items.service';

@Module({
  imports: [SequelizeModule.forFeature([CompareItem])],
  providers: [CompareItemsService],
})
export class CompareItemsModule {}
