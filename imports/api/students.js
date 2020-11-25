import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Students = new Mongo.Collection('students');

// if (Meteor.isServer) {
//     // This code only runs on the server
//     Meteor.publish('tasks', function tasksPublication() {
//         return Tasks.find({
//             $or: [
//                 { private: { $ne: true } },
//                 { owner: this.userId },
//             ],
//         });
//     });
// }

Meteor.methods({
    'students.insert'(student) {
        // check(text, String);

        // Make sure the user is logged in before inserting a task
        // if (!this.userId) {
        //     throw new Meteor.Error('not-authorized');
        // }

        if (!student) {
            throw new Meteor.Error("student not provided");
        }
        Students.insert(student);
    },
    'students.remove'(id) {
        // check(taskId, String);

        const student = Students.findOne(id);
        if(!student) {
            throw new Meteor.Error("student not found");
        }

        Students.remove(id);
    },
    'students.update'(student) {
        // check(taskId, String);
        // check(setChecked, Boolean);

        const fetchedStudent = Students.findOne(student.id);
        if(!fetchedStudent) {
            throw new Meteor.Error("student not found");
        }
        Students.update(student.id,{ $set: { name: student.name,email: student.email,phone: student.phone,date: student.date} });
    },
    'tasks.setPrivate'(taskId, setToPrivate) {
        check(taskId, String);
        check(setToPrivate, Boolean);

        const task = Tasks.findOne(taskId);

        // Make sure only the task owner can make a task private
        if (task.owner !== this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Tasks.update(taskId, { $set: { private: setToPrivate } });
    },
});