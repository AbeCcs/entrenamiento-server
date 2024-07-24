import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carros } from './carros.entity';

@Injectable()
export class CarrosService {

    constructor(@InjectRepository(Carros) private carrosRepository: Repository<Carros>) { }

    findAll(): Promise<Carros[]> {
        return this.carrosRepository.find();
    }


    
}




