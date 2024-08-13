import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
  } from "sequelize-typescript";
import type { InferAttributes, InferCreationAttributes } from "sequelize";
import Host from "./HOST";
  
  @Table({
    tableName: "EVENTHOST",
  })
  export default class EventHost extends Model<
    InferAttributes<EventHost>,
    InferCreationAttributes<EventHost>
  > {
    @Column({
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER,
    })
    EventHostId!: number;
  
    @ForeignKey(() => Host)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    hostId!: number;
  
    @BelongsTo(() => Host)
    host!: Host;
  }
  