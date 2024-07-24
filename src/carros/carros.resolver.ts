import { Query, Resolver } from '@nestjs/graphql';
import { CarrosService } from './carros.service';
import { Carros } from './carros.entity';

@Resolver()
export class CarrosResolver {

    constructor(private carrosService:CarrosService) { }

    @Query((returns) => [Carros])
    lista() {
      
        return this.carrosService.findAll();
    }

}