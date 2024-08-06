import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CrearRegistro
{
    @Field()
    id_propietario: number;


    @Field()
    cedula: number;

    @Field()
    nombre: string;
  }