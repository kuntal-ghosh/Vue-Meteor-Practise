import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Students = new Mongo.Collection('students');


Meteor.methods({
    'students.insert'(student) {
       

        if (!student) {
            throw new Meteor.Error("student not provided");
        }
        Students.insert(student);
    },


    'students.remove'(id) {

        const student = Students.findOne(id);
        if(!student) {
            throw new Meteor.Error("student not found");
        }

        Students.remove(id);
    },

    'students.update'(student) {
     

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

        if (task.owner !== this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Tasks.update(taskId, { $set: { private: setToPrivate } });
    },
});