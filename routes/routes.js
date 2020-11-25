/**
 * Copyright [2020] [Kaleb Moreno]

		Licensed under the Apache License, Version 2.0 (the "License");
		you may not use this file except in compliance with the License.
		You may obtain a copy of the License at

		http://www.apache.org/licenses/LICENSE-2.0

		Unless required by applicable law or agreed to in writing, software
		distributed under the License is distributed on an "AS IS" BASIS,
		WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		See the License for the specific language governing permissions and
		limitations under the License.

 * 
 * @author Kaleb Moreno
 * @version 11/21/2020
 * @description - This file holds all of the backend code for a simple API that sends JSON data 
 * to any site that sends in a GET request. The purpose is to have it 
 */


// pulling in the router from express
const routes = require('express').Router(),

	// For the eventual use of other APIs to complete the project
	axios = require('axios'),

	// Body parser
	bodyParser = require('body-parser'),

	postSchema = require('../models/schemas/Post'),

	asyncWrapper = require('../utils/errors/asyncWrapper'),

	AppError = require('../utils/errors/AppError');


// SHOW all posts & The home page
routes.get('/home', asyncWrapper(async (req, res) => {

// DONT FORGET { tags: 'general'} after testing
	const returnedPosts = await postSchema.Post.find().sort({ publish_date: -1 }); 
	res.render('index', { posts: returnedPosts });

}));

//SHOW specific posts
routes.get('/post:id', asyncWrapper(async (req, res) => {

	const { id } = req.params;
	const selectedPost = await postSchema.Post.findById(id);
	res.render('show', { post: selectedPost });
}));

// This route renders the EDIT PAGE 
routes.get('/post:id/edit', asyncWrapper(async (req, res) => {

		let { id } = req.params;
		let selectedPost = await postSchema.Post.findById(id);
		res.render('edit', { post: selectedPost });

}));


// Route that simply shows the create page 
routes.get('/home/new', (req, res) => {

		res.render('new'); // Make sure to pass in the tags available at some point
});

// ADD a new post FOR TESTING ONLY!!
routes.post('/home', asyncWrapper(async (req, res) => {
		let { title, subtitle, content } = req.body;

		const newPost = await postSchema.Post.create({
			title: title,
			subtitle: subtitle,
			content: content,
			publish_date: new Date(),
			author: 'TODO dynamic author',
			tags: ['amanda', 'david', 'general'],
		});

		res.redirect(`/post${newPost._id}`);

}));

// the POST route for the slot room for new posts regarding the slot room
routes.post('/slots', (req, res) => {
	res.send('SLOT  ROUTE');
})

// EDIT a post
routes.patch('/post:id', asyncWrapper(async (req, res) => {

	const { id } = req.params;
	const { title, subtitle, content, tags } = req.body;

	const msg = await postSchema.Post.updateOne({ _id: id },
		{
			title: title,
			subtitle: subtitle,
			content: content,
			date_updated: new Date()
		}
	);

	res.redirect(`/post${id}`);
}));

// Delete a post
routes.delete('/post:id', asyncWrapper(async (req, res) => {


		const { id } = req.params;
		const msg = await postSchema.Post.findByIdAndDelete(id);
		res.redirect('/home');
	

}));

// Root route that directs to the login page
routes.get('/', (req, res) => {

	res.render('login');
});

// The GET route for the slot room 
routes.get('/slots', (req, res) => {
	throw new AppError('Poop On A Stick!!', 500);
	res.render('slots');
})

// The GET route for the bingo related issues
routes.get('/bingo', (req, res) => {
	res.render('bingo');
})

// The POST route for creating bingo posts
routes.post('/bingo', (req, res) => {
	res.send('SLOT  ROUTE');
})

// The GET route for tools that the department needs.. scripts etc.
routes.get('/tools', (req, res) => {
	res.render('tools');
})

// the POST route for the tools route where people can add tools 
routes.post('/tools', (req, res) => {
	res.send('SLOT  ROUTE');
})

// POST route for the form on the home page which sends the data to a remote API
routes.post('/slotJP', (req, res) => {
	console.log('SENDING DATA TO THE API!!');
	console.log(req.body);
	res.redirect('/home');

});

// Error handlers!
routes.use((req, res) => {
	res.status(404).send('404 Not Found!');
})


routes.use((err, req, res, next) => {
	const { status = 500 } = err;
	res.send(err);
	// next(err);
});


module.exports = routes;