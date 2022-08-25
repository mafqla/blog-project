import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table
export class Role extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: true,
    comment: '角色id'
  })
  roleId: number

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    comment: '角色名'
  })
  roleName: string

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
    comment: '角色描述'
  })
  roleDesc: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: '角色类型'
  })
  roleType: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: '创建者id'
  })
  createdBy: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: '更新者id'
  })
  updatedBy: number

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: false,
    comment: '是否删除'
  })
  isDeleted: boolean

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: true,
    comment: '创建时间'
  })
  createdAt: Date

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: true,
    comment: '更新时间'
  })
  updatedAt: Date
}
