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
  InferCreationAttributes<Event, { omit: 'location' | 'speakers' }>
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  eventDay!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hourStart!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hourEnd!: string;

  @ForeignKey(() => Location)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  locationId!: number;

  @BelongsTo(() => Location)
  location!: Location;

  @BelongsToMany(() => Speaker, () => EventSpeaker)
  speakers!: Speaker[];
}
