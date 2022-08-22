import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType
} from 'sequelize-typescript'

@Table
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    comment: '用户id'
  })
  id: number

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    comment: '用户名'
  })
  useName: string

  @Column
  password: string

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    comment: '用户邮箱'
  })
  email: string

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
    comment: '用户头像'
  })
  avatar: string

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
    comment: '创建时间'
  })
  createdAt: Date

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
    comment: '更新时间'
  })
  updatedAt: Date

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: false,
    comment: '是否删除'
  })
  deleted: boolean

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    allowNull: false,
    comment: '角色id'
  })
  roleId: string

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    allowNull: false,
    comment: '状态'
  })
  status: string

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
    comment: '最后登录时间'
  })
  lastLogin: Date

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
    comment: '退出登录时间'
  })
  lastLogout: Date

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    allowNull: false,
    comment: '登录次数'
  })
  lastActivity: Date

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: '登录ip'
  })
  lastIp: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '登录设备'
  })
  lastDevice: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '登录地址'
  })
  lastLocation: string
}
