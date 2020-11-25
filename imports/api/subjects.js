import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import {Students} from './students';
export const Subjects = new Mongo.Collection('subjects');



Meteor.methods({
    'subjects.insert'(subject) {
        

    //    getting matched student name
       const student= Students.findOne({name:subject.studentName});
       if(!student) {
        throw new Meteor.Error("Student is not found");
       }
       
        let studentSubjects=[...student.subjects,subject.subjectName];
        console.log(studentSubjects);
        Students.update(student._id,{ $set: { subjects: studentSubjects} });


        if (!subject) {
            throw new Meteor.Error("subject not provided");
        }

        // getting matched subjects name
        let students=[];
        const matchedSubject= Subjects.findOne({subjectName:subject.subjectName});
        console.log("matched");
        console.log(matchedSubject);
        if(matchedSubject) {
            // if subject already exist
         students=[...matchedSubject.students,subject.studentName];
         Subjects.update(matchedSubject._id,{ $set: {students: students} });
            console.log("students to update");
            console.log(students);
        }
        else
        { 
            // if subject doesn't exist
            students=[subject.studentName];
            console.log("students to insert");
            console.log(students);
            Subjects.insert({...subject,students:students});

        }
    },
    
    'subjects.remove'(id) {

        const subject = subjects.findOne(id);
        if(!subject) {
            throw new Meteor.Error("subject not found");
        }

        Subjects.remove(id);
    },


    'subjects.update'(subject) {
       

        const fetchedsubject = subjects.findOne(subject.id);
        if(!fetchedsubject) {
            throw new Meteor.Error("subject not found");
        }
        Subjects.update(subject.id,{ $set: { name: subject.name,email: subject.email,phone: subject.phone,date: subject.date} });
    }
 
});