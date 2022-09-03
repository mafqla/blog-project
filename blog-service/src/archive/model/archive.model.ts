/**
 * @dscription 存档模型
 * @author skyseek(fql)
 * @Date  2022-09-03 17:00:00
 */
import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'archive'
})
export class Archive extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    comment: '存档id'
  })
  id: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: '文章标题'
  })
  article_title: string

  @Column({
    type: DataType.DATE,
    allowNull: false,
    comment: '文章创建时间'
  })
  article_create_time: string

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: DataType.NOW,
    comment: '存档时间'
  })
  archive_time: Date
}
