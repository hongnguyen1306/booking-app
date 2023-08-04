import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOption: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: true,
    entities: [__dirname + 'src/database/models/*{.ts,.js}'],
    migrations: [__dirname+ '/database/migrations/*{.ts,.js}'],
}

const dataSource = new DataSource(dataSourceOption)
export default dataSource
