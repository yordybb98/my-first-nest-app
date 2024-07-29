import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller("/tasks")
@ApiTags('Tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get()
    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 200, description: 'Get all tasks' })
    getAllTasks(@Query() query: any) {     
        console.log(query);
        return this.tasksService.getTasks();
    }

    @Get("/:id")
    @ApiOperation({ summary: 'Get task by id' })
    @ApiResponse({ status: 200, description: 'Get task by id' })
    @HttpCode(201) //just for test
    getTask(@Param("id") id: string) {
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    @ApiOperation({ summary: 'Create task' })
    @ApiResponse({ status: 201, description: 'Create task' })
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    }

    @Put()
    @ApiOperation({ summary: 'Update task' })
    @ApiResponse({ status: 200, description: 'Update task' })
    updateTask(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTask(task);
    }

    @Patch()
    @ApiOperation({ summary: 'Patch task' })
    @ApiResponse({ status: 200, description: 'Patch task' })
    patchTask() {
        return this.tasksService.patchTask();
    }

    @Delete()
    @ApiOperation({ summary: 'Delete task' })
    @ApiResponse({ status: 200, description: 'Delete task' })
    deleteTask() {
        return this.tasksService.deleteTask();
    }
}
