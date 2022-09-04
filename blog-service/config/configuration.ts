export default () => ({
  port: parseInt(process.env.PORT, 10),
  baseUrl: process.env.BASE_URL,
  database: {
    dialect: process.env.DB_DIALECT,
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    timezone: '+08:00',
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    },
    //自动导入实体
    autoLoadModels: true,
    synchronize: true
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT, 10),
    password: process.env.REDIS_PASSWORD,
    db: parseInt(process.env.REDIS_DB, 10)
  }
})
