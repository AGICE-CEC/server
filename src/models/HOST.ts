import type { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { EventHost } from "./EVENTHOST";

@Table({
    tableName: "HOST"
})
export class Host extends Model<
    InferAttributes<Host>,
    InferCreationAttributes<Host>
> {

    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER
    })
    hostId!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    hostName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    hostDescription!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    image!: string;

    @HasMany(() => EventHost)
    events!: EventHost[];
}