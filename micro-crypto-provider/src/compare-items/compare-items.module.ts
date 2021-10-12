import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompareItem } from './compare-item.model';
// import { UsersController } from './users.controller';
import { CompareItemsService } from './compare-items.service';

@Module({
  imports: [SequelizeModule.forFeature([CompareItem])],
  providers: [CompareItemsService],
  // controllers: [UsersController],
})
export class CompareItemsModule {}
