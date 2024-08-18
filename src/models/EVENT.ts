import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import Ubication from './UBICATION';
import Speaker from './SPEAKER';
import EventSpeaker from './EVENTSPEAKER';

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

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  event_day!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hours!: string;

  @ForeignKey(() => Ubication)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ubicationId!: number;

  @BelongsTo(() => Ubication)
  ubication!: Ubication;

  @BelongsToMany(() => Speaker, () => EventSpeaker)
  speakers!: Speaker[];
}
