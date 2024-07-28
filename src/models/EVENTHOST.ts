import type { InferAttributes, InferCreationAttributes } from "sequelize";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Host } from "./HOST";

@Table({
    tableName: "EVENTHOST",
})
export class EventHost extends Model<
    InferAttributes<EventHost>,
    InferCreationAttributes<EventHost>
> {

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    EventHostId!: number;

    @ForeignKey(() => Host)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    hostId!: number;

    @BelongsTo(() => Host)
    host!: Host;

}
