import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {

@Query(()=> String)
Helloworld():string{
    return 'hola mundo';
}

}

