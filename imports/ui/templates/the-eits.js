import { Template } from 'meteor/templating';
import { EITs} from '../../api/eits.js';
 
import './the-eits.html';

Template.body.events({
    'submit .new-eit'(event) {
      // Prevent default browser form submit
      event.preventDefault();
   
      // Get value from form element
      const target = event.target;
      const firstname = target.first.value;
      const lastname = target.last.value;
      const gender = target.gender.value;
      const dob = target.dob.value;
   
      // Insert a task into the collection
      EITs.insert({
        firstname,
        lastname,
        gender,
        dob,
      });
   
      // Clear form
      target.first.value = '';
      target.last.value = '';
      target.gender.value.checked = false;
      target.dob.value = '';
    },
  });