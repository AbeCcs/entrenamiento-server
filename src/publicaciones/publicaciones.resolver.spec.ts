import { Test, TestingModule } from '@nestjs/testing';
import { PublicacionesResolver } from './publicaciones.resolver';

describe('PublicacionesResolver', () => {
  let resolver: PublicacionesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicacionesResolver],
    }).compile();

    resolver = module.get<PublicacionesResolver>(PublicacionesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
