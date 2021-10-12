import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class CompareItem extends Model<CompareItem> {
  @Column
  data: string;
}
