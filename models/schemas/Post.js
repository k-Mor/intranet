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
 * @version 11/22/2020
 * @description - This file holds all of the backend code for a simple API that sends JSON data 
 * to any site that sends in a GET request. The purpose is to have it 
 */


 // For the Schema functionality  
const { Schema } = require('mongoose'),
    mongoose = require('mongoose');

/**
 * Mongoose Schema for the post objects 
 */
const postSchema = new Schema ({
    
    title: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 5,
        lowercase: true
    },

    subtitle: {
        type: String,
        required: false,
        maxlength: 100,
        minlength: 10,
        lowercase: true
    },

    content: {
        type: String,
        required: true,
        minlength: 50,
        lowercase: true
    },

    comments: {
        type: [
            { 
                body: String, 
                date: Date, 
                user: String 
            }
        ],
        lowercase: true
    },
 
    publish_date: {
        type: Date,
        required: true 
    },

    date_updated: {
        type: Date,
        default: new Date()
    },

    author: {
        type: String,
        required: true,
        lowercase: true
    },

    tags: {
        type: [String],
        required: false,
        lowercase: true,
        default: 'general',
    },

    meta: {
        type: [ {thumbsup: Number} ]
    }
}, { validateBeforeSave: true });


// Creating a Model from the schema
const Post = mongoose.model('Post', postSchema);

// Exports
module.exports.Post = Post;