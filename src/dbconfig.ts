import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';


dotenv.config();

export const defaultDataSource: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  entities: [path.dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  ssl: /true/i.test(process.env.SSL),
};

export default new DataSource(defaultDataSource as DataSourceOptions);



 
