import { Module, Post } from '@nestjs/common';
import { Servicios } from './publicaciones.service';
import { PublicacionesResolver } from './publicaciones.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datos } from './publicaciones.entity';

@Module({
  imports : [TypeOrmModule.forFeature([datos])],
  providers: [Servicios, PublicacionesResolver]
})
export class PublicacionesModule {}
