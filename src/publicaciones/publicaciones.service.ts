import { Injectable} from '@nestjs/common';
import { Publicaciones } from './publicaciones.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PublicacionesService {

constructor (@InjectRepository(Publicaciones) private postsRepository: Repository <Publicaciones>)  {}

findAll() :Promise <Publicaciones[]>
{
    return this.postsRepository.find();
}


}


