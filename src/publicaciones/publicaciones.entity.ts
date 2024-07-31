import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Column, PrimaryGeneratedColumn, Entity, Unique} from "typeorm";


@Entity()
@ObjectType()
export class Publicaciones {

    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Column()
    @Field({nullable:true})
    nombre: string;

  
  }
