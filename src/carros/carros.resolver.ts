import { Query, Resolver } from '@nestjs/graphql';
import { CarrosService } from './carros.service';
import { Carros } from './carros.entity';

@Resolver()
export class CarrosResolver {

    constructor(private carrosService:CarrosService) { }

    @Query((returns) => [Carros])
    lista_carros() {
      
        return this.carrosService.findAll();
    }

}