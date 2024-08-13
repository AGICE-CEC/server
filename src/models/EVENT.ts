import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import Ubication from './UBICATION';

@Table({
  tableName: 'EVENT',
})
export default class Event extends Model<
  InferAttributes<Event>,
  InferCreationAttributes<Event>
> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  eventId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @ForeignKey(() => Ubication)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ubicacionId!: number;

  @BelongsTo(() => Ubication)
  ubicacion!: Ubication;
}
