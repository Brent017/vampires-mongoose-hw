// 1. Require your node modules
const mongoose = require('mongoose');
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js');

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
const vampireArray = require('./populateVampires');
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

// Vampire.find(
// 	{victims: { $lte: 150}
// }, (err, vampires) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(vampires);
// 	}
// });

// Vampire.find(
// 	{victims: { $ne: 210234}
// }, (err, vampires) => {
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
// Vampire.find({title: { $exists: true}}, (err, vampires) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(vampires);
// 	}
// });

// Vampire.find({victims: { $exists: false}}, (err, vampires) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(vampires);
// 	}
// });

// Vampire.find(
// 	{title: { $exists: true},
// 	victims: { $exists: false}
// }, (err, vampires) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(vampires);
// 	}
// });

// Vampire.find({victims: { $exists: true, $gt: 1000}}, (err, vampires) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(vampires);
// 	}
// });
/////////////////////////////////////////////////
// ### Select with OR
// Vampire.find(
// 	{ $or: [{ location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]
// }, (err, vampires) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(vampires);
// 	}
// });

// Vampire.find(
// 	{ $or: [{ loves: 'brooding'}, { loves: 'being tragic'}]
// }, (err, vampires) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(vampires);
// 	}
// });

// Vampire.find(
// 	{ $or: [{ victims: { $gt: 1000}}, { loves: 'marshmallows'}]
// }, (err, vampires) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(vampires);
// 	}
// });

// Vampire.find(
// 	{ $or: [{ hair_color: 'red'}, {eye_color: 'green'}]
// 	}, (err, vampires) => {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(vampires);
// 		}
// 	});
/////////////////////////////////////////////////
//### Select objects that match one of several values
Vampire.find(
	{ loves: {$eq: 'frilly shirtsleeves', $eq:'frilly collars'}}, (err, article) => {
		console.log(article);
	})
Vampire.find({
	loves: 'brooding'}, (err, article) => {
	console.log(article);
})
Vampire.find({
	loves: {$eq: 'appearing innocent', $eq: 'trickery', $eq: 'lurking in rotting mansions', $eq: 'R&B music'}}, (err, article) => {
		console.log(article);
})
Vampire.find({$and: [
	{loves: 'fancy cloaks'}, 
	{loves: {$nin: ['top hats', 'virgin blood']}}, 
	]},
	(err, articleFound)=> {
		console.log(articleFound);
	})
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
