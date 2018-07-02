import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import './html/navbar.html'
import './html/main.html'

import { Listings } from '../imports/api/listings.js';
//import { Listings } from '../server/main.js';

Template.adminTemplate.helpers({
});

Template.adminTemplate.events({
  'submit .adminform'(event) {
  	event.preventDefault();

    //Call Meteor method
    // Meteor.call('listings.insert', event.target);

    console.log("Form submitted");
    console.log(event);
    var target = event.target;
    var listingName = target.name.value;
    var listingDesc = target.description.value;
    var price = target.price.value;
    var createdBy = Meteor.user().username;
    var date = target.listingDate.value;
    // var date = ()  

    console.log(listingName + " " + listingDesc + " " + createdBy + " | " + target.venuetype.value);
    console.log(date);
    Listings.insert({
      name: target.name.value,
      pax: parseInt(target.pax.value),
      description: target.description.value,
      type: target.venuetype.value,
      price: parseInt(price),
      date: date,
      createdBy: Meteor.userId(),
      createdAt: new Date()
    });

    event.target.name.value = "";
    event.target.pax.value = 1;
    event.target.venuetype.value = 1;
    event.target.price.value = "1 ";
    event.target.description.value = "";
    event.target.listingDate.value = "";
    event.target.startTime.value = "";
    event.target.endTime.value = "";
	}
});



/*Meteor.publish("fileUploads", function () {
  console.log("publishing fileUploads");
  return YourFileCollection.find();
});*/
