import { Controller, Get, HttpCode, HttpStatus, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class HelloController {

    @Get("/")
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url);
        return response.status(200).json({ message: "Hello World!" });
    }

    @Get("/new")
    @HttpCode(201)
    somethingNew(){
        return "Something new";
    }


    @Get("/error")
    @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
    error(){
        return "Error";
    }


    @Get("/notFound")
    @HttpCode(HttpStatus.NOT_FOUND)
    notFound(){
        return "Not Found";
    }


    @Get("/badRequest")
    @HttpCode(HttpStatus.BAD_REQUEST)
    badRequest(){
        return "Bad Request";
    }


}
