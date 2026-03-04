import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';
@Controller('course')
export class CourseController {
    
    constructor(private readonly courseService: CourseService) {}

    @Get()
    getAllCourses() {
        return this.courseService.getAllCourses();
    }

    @Get(':id')
    getCourseById(@Param('id') id: string) {
        return this.courseService.getCourseById(id);
    }

    @Post()
    createCourse(@Body() createCourseDto: any) {
        return this.courseService.createCourse(createCourseDto);
    }

    @Put(':id')
    updateCourse(@Param('id') id: string, @Body() updateCourseDto: any) {
        return this.courseService.updateCourse(id, updateCourseDto);
    }
    @Patch(':id')
    partialUpdateCourse(@Param('id') id: string, @Body() patchCourseDto: any) {
        return this.courseService.patchCourse(id, patchCourseDto);
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: string) {
        return this.courseService.deleteCourse(id);
    }

}


