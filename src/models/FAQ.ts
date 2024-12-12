import type { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "FAQ",
  timestamps: true
})
export default class Faq extends Model<
  InferAttributes<Faq>,
  InferCreationAttributes<Faq>
> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  FaqId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  question!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  answer!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  faq_language!: string;
}
