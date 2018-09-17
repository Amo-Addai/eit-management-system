import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const EITs = new Mongo.Collection('eits');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('eits', function tasksPublication() {
      return EITs.find();
    });
}  

Meteor.methods({
    'eits.insert'(firstname, lastname, gender, dob) {
      check(firstname, String);
      check(lastname, String);
      check(gender, String);
      check(dob, String);
   
      // Make sure the user is logged in before inserting a task
      if (! Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
   
      EITs.insert({
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        dob: dob,
        owner: Meteor.userId(),
      });
    },
    'eits.remove'(eitId) {
      check(eitId, String);
   
      EITs.remove(eitId);
    },
    'eits.update'(eitsId, firstname, lastname, gender, dob) {
      EITs.update(eitsId, { $set: { firstname:firstname, lastname:lastname, gender:gender, dob:dob} });
    },
  });