import { Injectable, OnModuleInit } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateRoleDto } from './dto/create-role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'
import { Role } from './model/role.model'

@Injectable()
export class RoleService implements OnModuleInit {
  async onModuleInit() {
    //初始化role表
    const superAdmin = {
      roleName: 'super-admin',
      roleType: '0',
      roleDesc: 'Super-admin',
      createdBy: 1,
      updatedBy: 1
    }
    const admin = {
      roleName: '管理员',
      roleType: '1',
      roleDesc: 'admin',
      createdBy: 1,
      updatedBy: 1
    }

    const user = {
      roleName: '用户',
      roleType: '2',
      roleDesc: '用户',
      createdBy: 1,
      updatedBy: 1
    }

    await Role.findOrCreate({
      where: superAdmin,
      logging: false //不输出日志
    })
    await Role.findOrCreate({
      where: admin,
      logging: false //不输出日志
    })
    await Role.findOrCreate({
      where: user,
      logging: false //不输出日志
    })
  }

  constructor(
    @InjectModel(Role) private readonly roleRepository: typeof Role
  ) {}

  create(createRoleDto: CreateRoleDto) {
    return 'This action adds a new role'
  }

  findAll() {
    return `This action returns all role`
  }

  findOne(id: number) {
    return `This action returns a #${id} role`
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`
  }

  remove(id: number) {
    return `This action removes a #${id} role`
  }
}
