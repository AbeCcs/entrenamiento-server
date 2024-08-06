import { Injectable } from '@nestjs/common';
import { datos } from './publicaciones.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearRegistro } from './dto/crear-propietario.input';
import { Carros } from 'src/carros/carros.entity';

@Injectable()
export class Servicios {


    constructor(@InjectRepository(datos) private acciones_Repository: Repository<datos>) { }

    consultar(): Promise<datos[]> {
        return this.acciones_Repository.find();
    }

    
   async  consultarxID(id:number): Promise<datos[]> {
        return await this.acciones_Repository.find({
            where:{
                id_propietario : id
            }
        })
     }

    crearRegistro(post: CrearRegistro): Promise<datos> {
        const nuevo_registro = this.acciones_Repository.create(post);
        return this.acciones_Repository.save(nuevo_registro)
    }



}


