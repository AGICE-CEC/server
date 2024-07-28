import { Model, Column, Table, DataType, HasMany } from 'sequelize-typescript';
import { Event } from './EVENT';
import type { InferAttributes, InferCreationAttributes } from 'sequelize';

@Table({
  tableName: 'UBICATION',
})
export class Ubication extends Model<
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

  @HasMany(() => Event)
  events!: Event[];
}
