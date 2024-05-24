import { Test, TestingModule } from '@nestjs/testing';
import { CourseSvService } from './course-sv.service';

describe('CourseSvService', () => {
  let service: CourseSvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseSvService],
    }).compile();

    service = module.get<CourseSvService>(CourseSvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
