import { Response } from "express";
import { STATUSCODE } from "src/Constant/main";


const success = (res: Response, data: any, msg: string = "success...") => {
    return res.status(STATUSCODE.success).json({
        statusCode: STATUSCODE.success,
        content: data,
        msg,
        date: new Date()
    })
};
const failed = (res: Response,msg:string="Bad request...!") => {
    return res.status(STATUSCODE.failed).json({
        statusCode: STATUSCODE.failed,
        content: [],
        msg,
        date: new Date()
    })
};
const serverError = (res: Response) => {
    return res.status(STATUSCODE.serverError).json({
        statusCode: STATUSCODE.serverError,
        content: [],
        msg: "SERVER ERROR 500...",
        date: new Date()
    })
};
export { serverError, success, failed };
