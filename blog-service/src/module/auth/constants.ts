export const jwtConstants = {
  secret: 'blog-key-by-skyseek'
}
export const roleConstans = {
  ROOT: 0, // 超级管理员
  ADMIN: 1, // 管理员
  TEST: 2, // 开发者（测试、运营具有同一权限，若提升为 RBAC 1 以上，则可酌情分开）
  USER: 3 // 普通用户
}
