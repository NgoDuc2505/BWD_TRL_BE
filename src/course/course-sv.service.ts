import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import logger from "src/Service/Logger/logger";
import { failed, serverError, success } from "src/Service/Response_config/main";

@Injectable()
export class CourseSvService {
  private prisma = new PrismaClient();

  async getCourse(res: Response, req: Request) {
    try {
      console.log(req.route.path);
      const data = await this.prisma.cOURSE.findMany();
      return res.status(200).json({
        statusCode: 200,
        data,
        msg: "success",
        date: new Date(),
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        statusCode: 500,
        data: [],
        msg: "SERVER ERROR 500",
        date: new Date(),
      });
    }
  }

  async getFullCourse(res: Response, req: Request) {
    try {
      logger("current path", req?.route?.path);
      const data = await this.prisma.cOURSE.findMany({
        include: {
          DETAIL: {
            include: {
              CORECONCEPT: true,
              FUNDAMENTAL: true,
              INTRODUCE: true,
            },
          },
        },
      });
      success(res, data, "Get full course successfully...");
    } catch (e) {
      logger("getFullCourseError", e);
      serverError(res);
    }
  }

  async getCourseDetail(res: Response, req: Request) {
    try {
      logger("current path", req?.route?.path);
      const { idCourse } = req.params;
      const data = await this.prisma.cOURSE.findUnique({
        where: {
          id: idCourse,
        },
        include: {
          DETAIL: {
            include: {
              CORECONCEPT: true,
              FUNDAMENTAL: true,
              INTRODUCE: true,
            },
          },
        },
      });
      if (data) {
        success(res, data, "Get full course successfully...");
      } else {
        failed(res, "Invalid id course...!");
      }
    } catch (e) {
      logger("getDetailCourseError", e);
      serverError(res);
    }
  }
}
