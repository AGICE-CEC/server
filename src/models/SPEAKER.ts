import type { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "SPEAKER",
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
    allowNull: false,
  })
  speakerName!: string;
}