import { Module, Post } from '@nestjs/common';
import { PublicacionesService } from './publicaciones.service';
import { PublicacionesResolver } from './publicaciones.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicaciones } from './publicaciones.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Publicaciones])],
  providers: [PublicacionesService, PublicacionesResolver]
})
export class PublicacionesModule {}
