import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import Event from './EVENT';
import Speaker from './SPEAKER';

@Table({
  tableName: 'EVENTSPEAKER',
})
export default class EventSpeaker extends Model<
  InferAttributes<EventSpeaker>,
  InferCreationAttributes<EventSpeaker>
> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  eventSpeakerId!: number;

  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  eventId!: number;

  @BelongsTo(() => Event)
  event!: Event;

  @ForeignKey(() => Speaker)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  speakerId!: number;

  @BelongsTo(() => Speaker)
  speaker!: Speaker;
}
