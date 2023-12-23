module.exports = {
    HOST: "ep-billowing-tree-04832905.eu-central-1.postgres.vercel-storage.com",
    PORT: "5432",
    USER: "default",
    PASSWORD: "y3lIO7HZYKqx",
    DB: "verceldb",
    DIALECT: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}