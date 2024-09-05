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
import EventSpeaker from './EVENTSPEAKER';
import Location from './LOCATION';
import Speaker from './SPEAKER';

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
    allowNull: true,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  eventDay!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  hourStart!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  hourEnd!: string;

  @ForeignKey(() => Location)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  locationId!: number;

  @BelongsTo(() => Location)
  location!: Location;

  @BelongsToMany(() => Speaker, () => EventSpeaker)
  speakers!: Speaker[];
}
