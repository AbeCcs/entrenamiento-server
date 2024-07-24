import { join } from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloworldModule } from './helloworld/helloworld.module';
import { PublicacionesModule } from './publicaciones/publicaciones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { defaultDataSource } from './dbconfig';
import { CarrosModule } from './carros/carros.module';
import * as dotenv from 'dotenv';


dotenv.config();

@Module({
  imports: [HelloworldModule,PublicacionesModule,
     GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    //playground: false,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      
  }),
  TypeOrmModule.forRootAsync({
    useFactory: () => ({
      ...defaultDataSource,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize : true,
    }),
  }),
  
   PublicacionesModule,
  
   CarrosModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
