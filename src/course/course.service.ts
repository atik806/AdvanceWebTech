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
    {
      id: '3',
      title: 'Advanced web tech',
      description: 'Deep dive into web dev features',
    },
    {
      id: '4',
      title: 'Machine Learning',
      description: 'Deep dive into Machine Learning features',
    },

    {
      id: '5',
      title: 'Natural language processing',
      description: 'Deep dive into NLP features',
    },
    {
      id: '6',
      title: 'Data structure',
      description: 'Deep dive into Data Structure features',
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

  
createCourse(){
  return "create course - from service";
}

  
  updateCourse(id: string){
    return `Update Course ${id} - from Service`;
  }

patchCourse(id: string){
  return `patch Course ${id} - from Service`;
}

deleteCourse(id: string){
  return `Delete Course ${id} - from Service`;
}}