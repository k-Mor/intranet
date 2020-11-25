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


// For MongoDB 
mongoose = require('mongoose')

// Mongo username
usr = 'kmor',

// Mongo username Password
password = '0aSaFnrAKHYW098L',

// Mongo initial DB 
dbName = 'test',

// Mongo URI to connect to 
uri = `mongodb+srv://${usr}:${password}@bjs-cluster.ttfat.mongodb.net/${dbName}?retryWrites=true&w=majority`,

// The connection options for Mongo
options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Models
postSchema = require('../../models/schemas/Post');


/**
 * 
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
 * 
 * @param {*} data 
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
 * 
 * @param {*} data 
 */
const getByID = async (data) => {
    try {

    }
    catch(e) {

    }

}

/**
 * 
 * @param {*} data 
 */
const getByTag = async (data) => {
    try {
             

    }

    catch(e) {

    }

}

/**
 * 
 * @param {*} data 
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