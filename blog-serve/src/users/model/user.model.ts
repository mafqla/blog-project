import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
  BeforeCreate
} from 'sequelize-typescript'

import * as bcrypt from 'bcrypt'
@Table
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: true,
    comment: '用户id'
  })
  id: number

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    comment: '用户名'
  })
  username: string

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    comment: '密码'
  })
  password: string

  @BeforeCreate
  static async encryptPwd(instance: User) {
    const saltRounds = 10
    instance.password = await bcrypt.hashSync(instance.password, saltRounds)
  }

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
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

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: true,
    comment: '是否删除'
  })
  deleted: boolean

  @Column({
    type: DataType.INTEGER,
    defaultValue: 2,
    allowNull: true,
    comment: '角色id'
  })
  roleType: number

  @Column({
    type: DataType.STRING,
    defaultValue: 0,
    allowNull: true,
    comment: '状态'
  })
  status: string

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: true,
    comment: '最后登录时间'
  })
  lastLogin: Date

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: true,
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
    allowNull: true,
    comment: '登录ip'
  })
  lastIp: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: '登录设备'
  })
  lastDevice: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: '登录地址'
  })
  lastLocation: string
}
