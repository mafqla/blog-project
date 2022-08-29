import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table
export class UserInfo extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    //自增
    autoIncrement: true,
    comment: '用户信息id'
  })
  id: number

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    comment: '用户昵称'
  })
  nickname: string

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
    comment: '用户头像'
  })
  avatar: string

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
    comment: '个人简介'
  })
  introduction: string

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
    comment: '用户邮箱'
  })
  email: string

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: true,
    comment: '创建时间'
  })
  createdAt: Date

  @Column({
    type: DataType.DATE,
    allowNull: true,
    comment: '更新时间'
  })
  updatedAt: Date
}
