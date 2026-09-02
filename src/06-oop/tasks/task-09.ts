/**
 * A school LMS needs to send notifications to students.
 * The system supports three notification types:
 * - Email, example:
 * --------------------------------------------------
 * To: student@example.com
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - SMS, example:
 * --------------------------------------------------
 * To: +628123456789
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - Push Notification, example:
 * --------------------------------------------------
 * Device: ST001
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * Tasks:
 * - Create class Notification with property "message" and method "send()"
 * - Create children class of Notification such as EmailNotification, SMSNotification, PushNotification
 * - each child should override "send()"
 */

class Notification {
    constructor(public message: string) { }

    send(): void {
        console.log(`Sending message: ${this.message}`);
    }
}

class EmailNotification extends Notification {
    constructor(
        message: string,
        public emailTo: string
    ) {
        super(message);
    }

    override send(): void {
        console.log("---");
        console.log(`To: ${this.emailTo}`);
        console.log(`Message: ${this.message}`);
        console.log("---");
    }
}

class SMSNotification extends Notification {
    constructor(
        message: string,
        public phoneTo: string
    ) {
        super(message);
    }

    override send(): void {
        console.log("---");
        console.log(`To: ${this.phoneTo}`);
        console.log(`Message: ${this.message}`);
        console.log("---");
    }
}

class PushNotification extends Notification {
    constructor(
        message: string,
        public deviceId: string
    ) {
        super(message);
    }

    override send(): void {
        console.log("---");
        console.log(`Device: ${this.deviceId}`);
        console.log(`Message: ${this.message}`);
        console.log("---");
    }
}

const emailNotification = new EmailNotification(
    "Your assignment has been graded.",
    "student@example.com"
);

const smsNotification = new SMSNotification(
    "Your assignment has been graded.",
    "+628123456789"
);

const pushNotification = new PushNotification(
    "Your assignment has been graded.",
    "ST001"
);

const notifications: Notification[] = [
    emailNotification,
    smsNotification,
    pushNotification
];

for (const notification of notifications) {
    notification.send();
}