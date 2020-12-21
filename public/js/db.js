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
 * @description - This file holds all of the database related code such as the connection string,
 * as well as methods that pertain only to the Mongo DB.
 */


// For MongoDB 
mongoose = require('mongoose')

// Mongo username
usr = 'kmor',

// Mongo username Password
password = '0aSaFnrAKHYW098L',

// Mongo initial DB 
dbName = 'test',

// Cloud based Mongo URI to connect to 
uri = `mongodb+srv://${usr}:${password}@bjs-cluster.ttfat.mongodb.net/${dbName}?retryWrites=true&w=majority`,

// The connection options for Mongo
options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Models
postSchema = require('../../models/schemas/Post');


/**
 * The purpose of this function is to connect to the DB and relay back to the 
 * console wether or not that connection was successful.
 *
 * @TODO better err handling
 */
const connectToTheDB = async () => {
    try {
        const res = await mongoose.connect(uri, options);
        console.log("Database Connected!!");
    }
    catch(e) {
        console.log(`Error connecting to the DB: ${e}`);
    }

};

/**
 * The purpose of this method is to eventually serve as the primary insertion point
 * for the application.
 *
 * @TODO better err handling
 */
const insertIntoDB = async (dataModel) => {
    try {
        const res = await dataModel.insertMany();
        console.log('Data saved successfully!');
    }
    catch(e) {
        console.log(`Error inserting into the DB: ${e}`)
    }

}

/**
 * The purpose of this function is to eventually serve as 
 * a primary getter for ID related searches
 *
 * @TODO better err handling
 */
const getByID = async (data) => {
    try {

    }
    catch(e) {

    }

}

/**
 * The eventual purpose of this method is to serve as the 
 * primary getter for tag related searches 
 *
 * @TODO better err handling
 */
const getByTag = async (data) => {
    try {
             

    }

    catch(e) {

    }

}

/**
 * The purpose of this function is to get all of the posts from the Posts collection.
 *  
 * @TODO better err handling
 */
const getAllPosts = async (data) => {
    try {
        post

    }

    catch(e) {

    }
}


// Exports
module.exports.connect = connectToTheDB;
module.exports.saveData = insertIntoDB;
module.exports.getByID = getByID;
module.exports.getByTag = getByTag;
module.exports.getAll = getAllPosts;
