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
 * @description - The purpose of this file is to hold the Mongoose Schema which represents
 * a comment in the database and application respectively.
 */


 // For the Schema functionality  
 const { Schema } = require('mongoose'),
 mongoose = require('mongoose');

 // Creating a new Mongoose schema
 const commentSchema = new Schema({
   user: {
     type: Schema.Types.ObjectId, // Reference to the user Object ID
     ref: 'User',
     required: true,
   },

   content: {
     type: String,
     required: true,
     minlength: 1,
   },

   dateCreated: {
     type: Date,
     default: new Date(),
     required: true,
   },
   
   dateUpdated: {
     type: Date,
     default: new Date(),
     required: false
   }
 });

 const Comment = mongoose.model('Comment', commentSchema); // Creating the model by passing the schema

 // Exports
 module.exports.Comment = Comment;
