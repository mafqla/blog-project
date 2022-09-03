/**
 * @dscription 配置日志模型
 * @author skyseek(fql)
 * @Date  2022-09-03 17:25:30
 */

import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'option_log'
})
export class OptionLog extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    comment: '配置日志id'
  })
  id: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '配置模块'
  })
  option_module: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '配置类型 新增 修改 删除'
  })
  option_type: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '配置url'
  })
  option_url: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '请求参数 数组格式'
  })
  request_params: string[]

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '请求方法'
  })
  request_method: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '返回数据'
  })
  response_data: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: '用户id'
  })
  user_id: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '用户昵称'
  })
  nickname: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '操作ip'
  })
  ip: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '操作ip来源'
  })
  ip_source: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '配置描述'
  })
  description: string

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: DataType.NOW,
    comment: '配置时间'
  })
  option_time: Date
}
