import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

private courses = [
    {
      id: '1',
      title: 'NestJS for Beginners',
      description: 'Learn the basics of NestJS',
    },
    {
      id: '2',
      title: 'Advanced NestJS',
      description: 'Deep dive into NestJS features',
    },
];

getAllCourses() {
    return this.courses;
  }


getCourseById(id: string) {
    const course = this.courses.find(course => course.id === id);

    if (!course) {
      throw new Error('Course not found');
    }

    return course;
}

  
  createCourse(createCourseDto: any) {
    const newCourse = {
      id: Date.now().toString(),
      ...createCourseDto,
    };

    this.courses.push(newCourse);
    return newCourse;
  }

  
  updateCourse(id: string, updateCourseDto: any) {
    const courseIndex = this.courses.findIndex(course => course.id === id);

    if (courseIndex === -1) {
      throw new Error('Course not found');
    }

    this.courses[courseIndex] = {
      id: id,
      ...updateCourseDto,
    };

    return this.courses[courseIndex];
  }


  patchCourse(id: string, patchCourseDto: any) {
    const courseIndex = this.courses.findIndex(course => course.id === id);

    if (courseIndex === -1) {
      throw new Error('Course not found');
    }

    this.courses[courseIndex] = {
      ...this.courses[courseIndex],
      ...patchCourseDto,
    };

    return this.courses[courseIndex];
  }

  
  deleteCourse(id: string) {
    const index = this.courses.findIndex(course => course.id === id);

    if (index === -1) {
      throw new Error('Course not found');
    }

    this.courses.splice(index, 1);

    return { message: 'Course deleted successfully' };
  }
}