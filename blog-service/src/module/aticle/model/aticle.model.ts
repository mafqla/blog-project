/**
 * @dscription 文章模型
 * @author skyseek(fql)
 * @Date  2022-09-03 15:44:15
 */
import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'aticle'
})
export class Aticle extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    comment: '文章id'
  })
  id: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '作者id'
  })
  author_id: string

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    comment: '文章分类id'
  })
  category_id: number

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: '文章缩略图'
  })
  article_cover: string

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    comment: '文章标题'
  })
  article_title: string

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    comment: '文章内容'
  })
  article_content: string

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: 0,
    comment: '文章类型 0:原创 1:转载 2:翻译'
  })
  article_type: number

  // 文章标签
  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: '文章标签 多个标签用逗号隔开 Tag id'
  })
  article_tags: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: '来源连接'
  })
  article_source_url: string

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: 0,
    comment: '是否置顶 0:否 1:是'
  })
  is_top: number

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: 0,
    comment: '是否开启评论 0:否 1:是'
  })
  is_comment: number

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: 0,
    comment: '是否开启赞赏 0:否 1:是'
  })
  is_appreciation: number

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: 0,
    comment: '是否删除 0:否 1:是'
  })
  is_delete: number

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    comment: '文章状态 0 草稿 1 发布 2 评论可见 3 私密'
  })
  status: number

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: true,
    comment: '创建时间'
  })
  createdAt: Date

  @Column({
    type: DataType.DATE,
    defaultValue: null,
    allowNull: true,
    comment: '更新时间'
  })
  updatedAt: Date
}
