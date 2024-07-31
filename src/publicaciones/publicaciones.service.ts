import { Injectable} from '@nestjs/common';
import { Publicaciones } from './publicaciones.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearPublicacion } from './dto/crear-propietario.input';

@Injectable()
export class PublicacionesService {


constructor (@InjectRepository(Publicaciones) private postsRepository: Repository <Publicaciones>)  {}

findAll() :Promise <Publicaciones[]>
{
    return this.postsRepository.find();
}



crearPublicacion( post: CrearPublicacion):Promise<Publicaciones>
{
    const nuevo_registro = this.postsRepository.create(post);
    return this.postsRepository.save(nuevo_registro)
}



}


