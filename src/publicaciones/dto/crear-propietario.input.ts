import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CrearPublicacion
{
    @Field()
    id: number;


    @Field()
    nombre: string;
  }