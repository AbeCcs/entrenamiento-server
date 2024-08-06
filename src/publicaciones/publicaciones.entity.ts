import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Carros } from "src/carros/carros.entity";
import { Column, PrimaryGeneratedColumn, Entity, OneToOne,JoinColumn } from "typeorm";


@Entity()
//@Unique(['id_vehiculo'])
@ObjectType()
export class datos {

  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id_propietario: number;

  @Column()
  @Field((type) => Int)
  cedula: number;


  @Column()
  @Field({ nullable: true })
  nombre: string;

  //@Column()
  //@Field((type)=>Int)
  //id_vehiculo:number;


  @OneToOne(() => Carros, (carros) => carros.id_vehiculo)
  @JoinColumn({ name: 'id_vehiculo' })
  @Field(() => Carros)
  id_vehiculos: Carros;

}




