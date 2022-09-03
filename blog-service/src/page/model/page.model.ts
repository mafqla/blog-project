/**
 * @dscription 页面模型
 * @author skyseek(fql)
 * @Date  2022-09-03 17:46:05
 */

import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'page'
})
export class Page extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    comment: '页面id'
  })
  id: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '页面名称'
  })
  page_name: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '页面路径'
  })
  page_path: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '页面标签 用于页面标题'
  })
  page_label: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '页面封面'
  })
  page_cover: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '页面描述'
  })
  page_desc: string

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
