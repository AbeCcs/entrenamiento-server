import { Module, Post } from '@nestjs/common';
import { CarrosService } from './carros.service';
import {CarrosResolver } from './carros.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carros } from './carros.entity';


@Module({
  imports : [TypeOrmModule.forFeature([Carros])],
  providers: [CarrosService, CarrosResolver]
})
export class CarrosModule {}
