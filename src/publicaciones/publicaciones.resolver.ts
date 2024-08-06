import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Servicios } from './publicaciones.service';
import { datos } from './publicaciones.entity';
import { CrearRegistro } from './dto/crear-propietario.input';
import { Int } from '@nestjs/graphql';
import { Post } from '@nestjs/common';

@Resolver()
export class PublicacionesResolver {

    constructor(private publicacionesService: Servicios) { }

    @Query((returns) => [datos])
    consultarTodo() {

        return this.publicacionesService.consultar();
    }

    @Query(() => datos)
    consultarID(@Args('id_propietario', { type: () => Int }) id: number) {
      return this.publicacionesService.consultarxID(1);
    }


    @Mutation((returns) => datos)
    crearRegistro(@Args('postInput') postInput: CrearRegistro) {
        return this.publicacionesService.crearRegistro(postInput);
    }

}

