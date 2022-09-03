/**
 * @dscription 分类模型
 * @author skyseek(fql)
 * @Date  2022-09-03 15:47:15
 */

import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'category'
})
export class Category extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    comment: '分类id'
  })
  id: number

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    comment: '分类名称'
  })
  category_name: string

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: DataType.NOW,
    comment: '创建时间'
  })
  createdAt: Date

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: null,
    comment: '更新时间'
  })
  updatedAt: Date
}
