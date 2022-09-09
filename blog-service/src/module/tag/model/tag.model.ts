/**
 * @dscription 标签模型
 * @author skyseek(fql)
 * @Date  2022-09-03 16:46:55
 */

import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'tag'
})
export class Tag extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    comment: '标签id'
  })
  id: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '标签名称'
  })
  tag_name: string

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
    comment: '标签文章数'
  })
  article_count: number

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: DataType.NOW,
    comment: '标签创建时间'
  })
  createdAt: Date

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: null,
    comment: '标签更新时间'
  })
  updatedAt: Date
}
