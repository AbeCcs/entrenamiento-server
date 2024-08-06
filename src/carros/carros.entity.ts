import { ObjectType, Field, Int } from "@nestjs/graphql";
import { generateKey } from "crypto";
import { datos } from "src/publicaciones/publicaciones.entity";
import { Column, PrimaryGeneratedColumn, Entity, JoinColumn,OneToOne} from "typeorm";


@Entity()
@ObjectType()
export class Carros {

    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id_vehiculo: number;s

    @Column()
    @Field({nullable:true})
    marca: string;

   
    @Column()
    @Field({nullable:true})
    modelo: string;

    @OneToOne(() => datos, (Datos) => Datos.id_vehiculos)
    @Field(() => datos)
    Datos: datos;

    

}