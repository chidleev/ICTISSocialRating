module.exports = {
    HOST: "ep-white-union-00622151.eu-central-1.postgres.vercel-storage.com",
    PORT: "5432",
    USER: "default",
    PASSWORD: "DIw7YHL3vfuB",
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