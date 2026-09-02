/**
 * A school wants to create a simple student profile system. 
 * Every student has a student ID, name, age, major, and current grade level. 
 * The school also wants the system to display a student's profile.
 * For example, a student named Lionel Messi has the following information:
 * | Property   | Value                |
 * | ---------- | -------------------- |
 * | Student ID | ST001                |
 * | Name       | Lionel Messi         |
 * | Age        | 17                   |
 * | Major      | Software Engineering |
 * | Grade      | 11                   |
 * 
 * The program should allow the school to create multiple student objects with different information.
 * Student Tasks
 * Create a class named with "Student"
 * 
 * The class should have:
 * studentId
 * name
 * age
 * major
 * grade
 * 
 * Use a constructor to initialize all properties.
 * Create a method: showProfile()
 * that displays the student's information.
 * Then create at least three student objects.
 */

class Student {
    studentId: string;
    name: string;
    age: number;
    major: string;
    grade: number

    constructor(studentId: string, name: string, age: numbber, major: string, grade: number) {
        this.studentId = studentId
        this.name = name;
        this.age = age;
        this.major = major;
        this.grade = grade
    }
    showProfile(): void {
        console.log(`=== STUDENT PROFILE ===`);
        console.log(`Student ID : ${this.studentId}`);
        console.log(`Name       : ${this.name}`);
        console.log(`Age        : ${this.age}`);
        console.log(`Major      : ${this.major}`);
        console.log(`Grade      : ${this.grade}`);
        console.log(`-----------------------`);
    }
}
