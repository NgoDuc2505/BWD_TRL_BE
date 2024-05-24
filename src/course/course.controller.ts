import { Controller, Get, Req, Res } from "@nestjs/common";
import { CourseSvService } from "./course-sv.service";
import { Request, Response } from "express";

@Controller("course")
export class CourseController {
  constructor(private courseSvService: CourseSvService) {}

  @Get("detail")
  async getCourse(@Res() res: Response, @Req() req: Request) {
    return this.courseSvService.getCourse(res, req);
  }

  @Get("")
  async getAllCourse(@Res() res: Response, @Req() req: Request) {
    return this.courseSvService.getFullCourse(res, req);
  }

  @Get("cdetail/:idCourse")
  async getDetailCourse(@Res() res: Response, @Req() req: Request) {
    return this.courseSvService.getCourseDetail(res, req);
  }
}
