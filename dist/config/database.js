"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Dog_model_1 = require("../models/Dog.model");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: "localhost",
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    logging: false,
    models: [Dog_model_1.Dog]
});
const connectDB = async () => {
    try {
        await connection.authenticate();
        await connection.sync();
        console.log('PostgreSQL Connected...');
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        process.exit(1);
    }
};
exports.default = connectDB;
//# sourceMappingURL=database.js.map