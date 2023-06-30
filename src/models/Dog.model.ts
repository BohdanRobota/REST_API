import { Table, Model, Column, DataType } from 'sequelize-typescript';


export interface IDogAttributes {
  name: string
  color: string
  tailLength: number
  weight: number
}

@Table({
  timestamps: false,
  tableName: 'dogs'
})
export class Dog extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true
  })
  id: number

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  color: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  tailLength: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  weight: number
}