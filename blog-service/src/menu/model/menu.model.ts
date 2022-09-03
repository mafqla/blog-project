/**
 * @dscription 菜单模型
 * @author skyseek(fql)
 * @Date  2022-09-03 17:16:12
 */

import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'menu'
})
export class Menu extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    comment: '菜单id'
  })
  id: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '菜单名称'
  })
  name: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '菜单路径'
  })
  path: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '菜单组件'
  })
  component: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '菜单图标'
  })
  icon: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: '菜单排序'
  })
  sort: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: '菜单父id'
  })
  parent_id: number

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: 1,
    comment: '菜单是否显示 0:不显示 1:显示'
  })
  is_show: number

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
