import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import EventSpeaker from './EVENTSPEAKER';

@Table({
  tableName: 'SPEAKER',
})
export default class Speaker extends Model<
  InferAttributes<Speaker>,
  InferCreationAttributes<Speaker>
> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  speakerId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  speakerName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  speakerDescription!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  speakerImage!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  country!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  linkedIn!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  contact!: string;

  @HasMany(() => EventSpeaker)
  eventSpeakers!: EventSpeaker[];
}
