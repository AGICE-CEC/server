import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import Event from './EVENT';

@Table({
  tableName: 'LOCATION',
  timestamps: true,
})
export default class Location extends Model<
  InferAttributes<Location>,
  InferCreationAttributes<Location, { omit: 'events' }>
> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  locationId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  locationName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  locationDescription!: string;

  @HasMany(() => Event, 'locationId')
  events!: Event[];
}
