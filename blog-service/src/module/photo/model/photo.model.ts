/**
 * @dscription 图片模型
 * @author skyseek(fql)
 * @Date  2022-09-03 17:11:23
 */

import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'photo'
})
export class Photo extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    comment: '图片id'
  })
  id: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '图片名称'
  })
  photo_name: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '图片地址'
  })
  photo_url: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '图片描述'
  })
  photo_desc: string

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
