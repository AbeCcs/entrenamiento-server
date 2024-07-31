import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PublicacionesService } from './publicaciones.service';
import { Publicaciones } from './publicaciones.entity';
import {  CrearPublicacion } from './dto/crear-propietario.input';

import { Post } from '@nestjs/common';

@Resolver()
export class PublicacionesResolver {

    constructor(private publicacionesService:PublicacionesService) { }

    @Query((returns) => [Publicaciones])
    posts() {
      
        return this.publicacionesService.findAll();
    }


    @Mutation((returns)=> Publicaciones)
     crearPublicacion(@Args('postInput') postInput :CrearPublicacion)
     {
         return this.publicacionesService.crearPublicacion(postInput);
    }
    
}

