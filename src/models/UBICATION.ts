import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import Event from './EVENT';

@Table({
  tableName: 'UBICATION',
})
export default class Ubication extends Model<
  InferAttributes<Ubication>,
  InferCreationAttributes<Ubication>
> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  ubicationId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  locationName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  locationDescription!: string;

  @HasMany(() => Event, 'ubicationId')
  events!: Event[];
}
