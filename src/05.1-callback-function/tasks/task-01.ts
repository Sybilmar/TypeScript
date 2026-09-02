/**
 * A school system needs to send a notification to a student after an important event occurs.
 * The notification system itself should not know what kind of notification will be sent. 
 * Instead, the notification action is provided by another function.
 * For example, when a student successfully registers for a course, the system can display a registration message.
 */

function welcomeAllStudents(
    students: string[],
    callback: (name: string) => void
): void {
    console.log("Starting welcome process...");

    for (const student of students) {
        callback(student);
    }
}

/** The school provides the welcome message callback: */
function showWelcomeMessage(name: string): void {
    console.log(`Welcome to the new school year, ${name}!`);
}

// Example execution:
const studentList = ["John Cena", "Alya", "Budi", "Citra"];

welcomeAllStudents(studentList, showWelcomeMessage);

/** 
 * TASK:
 * create another function that display welcomming message for entire student!
 * Don't forget to implement callback function.
 * */