import { Template } from 'meteor/templating';

import { EITs } from '../../api/eits.js';
import './eits-list.html';

Template.eitlist.helpers({
    eits:()=>{
      return EITs.find({}, { sort: { lastname: 1 } });
    },
});