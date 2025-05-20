const course = {
    coursename : "oop",
    price : "999",
    courseInstructor : "usama"
}
//const{courseInstructor} = course
//we can also name on our choice too
const {courseInstructor: instructor} = course;
console.log(instructor);
