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
 * @description - This file holds all of the code for the user Mongoose Schema
 */


 // For the Schema functionality  
 const { Schema } = require('mongoose'),
 mongoose = require('mongoose');


 // This is the schema that defines a user object in Mongo
 const UserSchema = new Schema({
   username: {
     type: String,
     required: true,
     maxlength: 50,
     minlength: 5,
     lowercase: true
   },
   
   // TODO Hashing / Salting - This is purely for testing
   password: {
     type: String,
     required: true,
     minlength: 5
   },
   
   email: {
     type: String,
     required: true,
     lowercase: true
   },

   joined: {
     type: Date,
     default: new Date(),
     required: true
   },
   
   posts: {
     type: Schema.Types.ObjectId, // Reference to the Post Object IDs
     ref: 'Post',
   }
 })

 // Creating the user object from the Schema
const User = mongoose.model('User', UserSchema);

// Exports
module.exports.User = User;
