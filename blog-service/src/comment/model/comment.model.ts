/**
 * @dscription 评论模型
 * @author skyseek(fql)
 * @Date  2022-09-03 16:46:00
 */
import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'comment'
})
export class Comment extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    comment: '评论id'
  })
  id: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: '文章id'
  })
  article_id: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: '评论者id'
  })
  user_id: number

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    comment: '父评论id'
  })
  parent_id: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '评论者昵称'
  })
  nickname: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '评论者邮箱'
  })
  email: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '评论者头像'
  })
  avatar: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '评论内容'
  })
  content: string

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
    comment: '评论点赞数'
  })
  like_count: number

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
    comment: '评论踩数'
  })
  dislike_count: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '评论是否删除 0:正常 1:删除'
  })
  is_delete: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '评论是否审核 0:未审核 1:审核通过 2:审核未通过'
  })
  is_audit: number

  @Column({
    type: DataType.STRING,
    defaultValue: null,
    comment: 'ip地址'
  })
  ip: string

  @Column({
    type: DataType.STRING,
    defaultValue: null,
    comment: 'ip来源'
  })
  ip_source: string

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: DataType.NOW,
    comment: '评论时间'
  })
  comment_time: Date
}
