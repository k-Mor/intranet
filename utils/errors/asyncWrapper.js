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
 * @version 11/24/2020
 * @description - This file holds all of the backend code for a simple API that sends JSON data 
 * to any site that sends in a GET request. The purpose is to have it 
 */


module.exports = function(fn) {
  return function(req, res, next) {
    fn(req, res, next).catch(e => next(e));
  }
};