import { Query, Resolver } from '@nestjs/graphql';
import { PublicacionesService } from './publicaciones.service';
import { Publicaciones } from './publicaciones.entity';

@Resolver()
export class PublicacionesResolver {

    constructor(private publicacionesService:PublicacionesService) { }

    @Query((returns) => [Publicaciones])
    posts() {
      
        return this.publicacionesService.findAll();
    }

}