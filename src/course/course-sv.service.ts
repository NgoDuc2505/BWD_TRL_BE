import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';


@Injectable()
export class CourseSvService {
    private prisma = new PrismaClient();

    async getCourse(res: Response, req: Request){
       try{
        console.log(req.route.path);
        const data = await this.prisma.cOURSE.findMany();
        return res.status(200).json({
            statusCode: 200,
            data,
            msg: "success",
            date: new Date()
        });
       }catch(e){
        return res.status(500).json({
            statusCode: 500,
            data: [],
            msg: "SERVER ERROR 500",
            date: new Date()
        });
       }
    }
}
