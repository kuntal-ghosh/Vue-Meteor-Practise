import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import {Students} from './students';
export const Subjects = new Mongo.Collection('subjects');

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
    'subjects.insert'(subject) {
        // check(text, String);

        // Make sure the user is logged in before inserting a task
        // if (!this.userId) {
        //     throw new Meteor.Error('not-authorized');
        // }

       
       const student= Students.findOne({name:subject.studentName});
       if(!student) {
        throw new Meteor.Error("Student is not found");
       }
       
        let studentSubjects=[...student.subjects,subject.subjectName];
        // studentSubjects.push(subject.subjectName);
        console.log(studentSubjects);
        Students.update(student._id,{ $set: { subjects: studentSubjects} });


        if (!subject) {
            throw new Meteor.Error("subject not provided");
        }
        let students=[];
        const matchedSubject= Subjects.findOne({subjectName:subject.subjectName});
        console.log("matched");
        console.log(matchedSubject);
        if(matchedSubject) {
         students=[...matchedSubject.students,subject.studentName];
         Subjects.update(matchedSubject._id,{ $set: {students: students} });
            console.log("students to update");
            console.log(students);
        }
        else
        { 
            students=[subject.studentName];
            console.log("students to insert");
            console.log(students);
            Subjects.insert({...subject,students:students});

        }
    },
    'subjects.remove'(id) {
        // check(taskId, String);

        const subject = subjects.findOne(id);
        if(!subject) {
            throw new Meteor.Error("subject not found");
        }

        Subjects.remove(id);
    },
    'subjects.update'(subject) {
        // check(taskId, String);
        // check(setChecked, Boolean);

        const fetchedsubject = subjects.findOne(subject.id);
        if(!fetchedsubject) {
            throw new Meteor.Error("subject not found");
        }
        Subjects.update(subject.id,{ $set: { name: subject.name,email: subject.email,phone: subject.phone,date: subject.date} });
    }
 
});