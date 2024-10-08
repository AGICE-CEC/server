import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import Event from './EVENT';

@Table({
  tableName: 'LOCATION',
})
export default class Location extends Model<
  InferAttributes<Location>,
  InferCreationAttributes<Location, { omit: 'locationId' | 'events' }>
> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  locationId!: number;

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

  @HasMany(() => Event, 'locationId')
  events!: Event[];
}
