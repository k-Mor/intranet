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
  * 
  */
 const commentSchema = new Schema({
   user: {
     type: Schema.Types.ObjectId,
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

 const Comment = mongoose.model('Comment', commentSchema);

 module.exports.Comment = Comment;