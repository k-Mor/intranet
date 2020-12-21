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
 * @description - This file holds all of the client side JS for the index page.
 */

 /**
  * The purpose of this function is to serve as the primary entry point,
  * making the code more self evident.
  */
 const init = () => {

   // Setup eventListeners
   setUpEventListeners();
   
 };

 /**
  * The purpose of this function is to create and bind all of the client side event 
  * listeners necessary for this page.
  */
 const setUpEventListeners = () => {

   // Storing the items that have the same functionality into an Array
   let items = [];

   // Adding event listeners to the primary containers
   const formContainer = document.querySelector('.update-form');
   const sideBar = document.querySelector('.post-container');

   // Pushing them into the Array
   items.push(formContainer, sideBar);

   for(let item of items) { // O(N) runtime complexity 
      item.addEventListener('mouseover', () => {
         item.classList.add('hover');
      })
   
      item.addEventListener('mouseout', () => {
         item.classList.remove('hover');
      })
   }
 }

 // Starting the file
 init();

