// 1. Require your node modules
const mongoose = require('mongoose');
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js');
const vampireArray = require('./populateVampires');
// 3. Connect your database and collection name
connectionString = 'mongodb://localhost/vampire';
// 4. Open your mongoose connection
mongoose.connect(connectionString, { useNewUrlParser: true});

mongoose.connection.on('connected', () => {
	console.log(`mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
	console.log(`mongoose disconnected from ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
	console.log(`mongoose error: ${err}`);
});
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(vampireArray, (err, data) => {
	console.log("added provided vampire data");
	mongoose.connection.close();
})
// ### Add some new vampire data
// Vampire.create({
// 	name: 'Nosferatu',
// 	hair_color: 'black',
// 	eye_color: 'black',
// 	dob: 'June 6, 1921',
// 	loves: ['creepy wall shadows', 'silent films'],
// 	location: 'Wisborg, Germany',
// 	gender: 'm',
// 	victims: 22
// }, (err, article) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(article);
// }
// });

// Vampire.create({
// 	name: 'Carmilla',
// 	hair_color: 'brown',
// 	eye_color: 'brown',
// 	dob: 'July 21, 1871',
// 	loves: ['young women', 'turning into a cat-like creature'],
// 	location: 'Styria, Austria',
// 	gender: 'f',
// 	victims: 3
// }, (err, article) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(article);
// }
// });

// Vampire.create({
// 	name: 'Santanico Pandemonium',
// 	hair_color: 'brown',
// 	eye_color: 'brown',
// 	dob: 'January 17, 1996',
// 	location: 'Chihuahua, Mexico',
// 	gender: 'f',
// 	victims: 10
// }, (err, article) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(article);
// 	}
// });

// Vampire.create({
// 	name: 'Edward Cullen',
// 	hair_color: 'brown',
// 	eye_color: 'brown',
// 	dob: 'November 21, 2008',
// 	location: 'Forks, Washington',
// 	gender: 'm',
// 	victims: 2
// }, (err, article) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(article);
// 	}
// });


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({gender: 'f'}, (err, vampires) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(vampires);
// 	}
// });

// Vampire.find({victims: { $gt: 500}}, (err, vampires) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(vampires);
// 	}
// });

// Vampire.find({victims: { $lte: 150}}, (err, vampires) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(vampires);
// 	}
// });

// Vampire.find({victims: { $ne: 210234}}, (err, vampires) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(vampires);
// 	}
// });

// Vampire.find({victims: { $gte: 150, $lte: 500}}, (err, vampires) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(vampires);
// 	}
// });
/////////////////////////////////////////////////
// ### Select by exists or does not exist
Vampire.find({title: { $exists: true}}, (err, vampires) => {
	if(err){
		console.log(err);
	} else {
		console.log(vampires);
	}
});

Vampire.find({victims: { $exists: false}}, (err, vampires) => {
	if(err){
		console.log(err);
	} else {
		console.log(vampires);
	}
});

Vampire.find({title: { $exists: true}}, {victims: { $exists: false}}, (err, vampires) => {
	if(err){
		console.log(err);
	} else {
		console.log(vampires);
	}
});

Vampire.find({victims: { $exists: true, $gt: 1000}} (err, vampires) => {
	if(err){
		console.log(err);
	} else {
		console.log(vampires);
	}
});
/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
