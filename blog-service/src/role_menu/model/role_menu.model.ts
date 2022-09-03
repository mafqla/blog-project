/**
 * @dscription 角色模型
 * @author skyseek(fql)
 * @Date  2022-09-03 17:41:32
 */

import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table({
  tableName: 'role_menu'
})
export class RoleMenu extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: '角色id'
  })
  role_id: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: '菜单id'
  })
  menu_id: number
}
