import { Controller, Get, HttpCode, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

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

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 14;
    }

    @Get('active/:status')
    @UseGuards(AuthGuard)
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        return status;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}) {
        return "Hello " + query.name + " your age is " + query.age;
    }

}
