import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseController } from './course/course.controller';
import { CourseSvService } from './course/course-sv.service';

@Module({
  imports: [],
  controllers: [AppController, CourseController],
  providers: [AppService, CourseSvService],
})
export class AppModule {}
