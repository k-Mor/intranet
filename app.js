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
 * @version 11/15/2020
 * @description - This file holds all of the backend code for a simple API that sends JSON data 
 * to any site that sends in a GET request. The purpose is to have it 
 */


// The Express framework and other constants
const express = require('express'),

    // Instance of the Express Framework
    app = express(),

    // Path dependency 
    path = require('path'),

    // Heroku port or defaults to 3000
    appPort = process.env.PORT || 3000,

    // Cors library
    cors = require('cors'),

    // All of the routes for the application in the routes file
    routes = require('./routes/routes'),

    // All of the methods pertaining to the db
    dbFile = require('./public/js/db'),

    // For sending RESTful HTTP requests
    methodOverride = require('method-override');





/**
 * The init function that behaves as the primary 
 * controller for the application
 */
const init = () => {
    // Set the views directory
    app.set('views', path.join(__dirname, 'views'));

    // Setting the view engine to ejs
    app.set('view engine', 'ejs');

    // Connect to the Mongo Database
    dbFile.connect();

    // Telling express to expect JSON
    app.use(express.json());

    // Telling express to parse any form data coming in
    app.use(express.urlencoded({ extended: true }));

    // telling the application to use CORS
    app.use(cors());

    //Serving the public directory for static files
    app.use(express.static('public'));

    // So we can send PATCH and other HTTP requests that HTML doesn't support
    app.use(methodOverride('_method'));

    // Setting the routes for the application
    app.use('/', routes);

    // Telling the app to listen on either a local port in Heroku, or 3000 by default
    app.listen(appPort, () => {
        console.log("Application started & listening on port: ", appPort);
    });
}

// Stating the application
init();