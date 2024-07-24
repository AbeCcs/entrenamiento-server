import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Column, PrimaryGeneratedColumn, Entity, Unique} from "typeorm";


@Entity()
@ObjectType()
export class Carros {

    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    fecha: number;

    @Column()
    @Field({nullable:true})
    marca: string;

   
    @Column()
    @Field({nullable:true})
    modelo: string;


}