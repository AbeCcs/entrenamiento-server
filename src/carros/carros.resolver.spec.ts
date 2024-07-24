import { Test, TestingModule } from '@nestjs/testing';
import { CarrosResolver } from './carros.resolver';

describe('CarrosResolver', () => {
  let resolver: CarrosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarrosResolver],
    }).compile();

    resolver = module.get<CarrosResolver>(CarrosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
