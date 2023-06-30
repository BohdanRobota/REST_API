import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { models } from "../models";

const sequelizeOptions: SequelizeOptions = {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  logging: false,
  models: models
}

const connectDB = async () => {
  try {
    const connection = new Sequelize(sequelizeOptions);
    await connection.authenticate();
    await connection.sync();
    console.log('PostgreSQL Connected...');
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    process.exit(1);
  }
}

export default connectDB;