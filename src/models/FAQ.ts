import type { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "FAQs",
  timestamps: true,
  underscored: true,
})
export class FAQ extends Model<
  InferAttributes<FAQ>,
  InferCreationAttributes<FAQ>
> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  question!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  answer!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  media!: string;
}
