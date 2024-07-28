import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller("/tasks")
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(@Query() query: any) {     
        console.log(query);
        return this.tasksService.getTasks();
    }

    @Get("/:id")
    @HttpCode(201) //just for test
    getTask(@Param("id") id: string) {
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTask(task);
    }

    @Patch()
    patchTask() {
        return this.tasksService.patchTask();
    }

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }
}
