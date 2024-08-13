import type { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "HOST",
})
export default class Host extends Model<
  InferAttributes<Host>,
  InferCreationAttributes<Host>
> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  HostId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hostName!: string;
}