# (SWD-100) Coding from Scratch _ Final Project

For your final project in Coding From Scratch, you will be building a form, use the data inputted in the form to create a basic ID card. You will be using many topics from this course, so be sure you feel confident in your new skills. Below are the requirements needed for this project. The requirements are broken down by what you will need in each file (JS, HTML or CSS). Good luck!

#
**HTML file**
#
* Create an h1 tag that says "Let's Create an ID card!"
* Create 5 inputs and labels for:
  + First Name
  + Last Name
  + Age
  + Phone Number
  + Address
* Give each input an id that corresponds to what the input is for.
* Add a break tag after each input so they are listed vertically and not horizontally.
* Add a button that uses onclick to call the function named idCard.
  + Tip! You will create this function in the JS file.
* Link to your JavaScript file
* Link to your CSS file
# 
**JS file**
#
* Create a function named idCard
  + Everything below will be located within this function
* Create three variables named firstName, lastName, and address. Set those variables equal to the DOM element they correspond with so it pulls in the value of each input.
* Use the DOM innerHTML to post the first and last name to the tag that has an id of postFullName
* Use the DOM innerHTML to post the address to the tag that has an id of postAddress
  + Tip! These id's were already included in your html page within the ID card div tag.
* Create two variables named age and phoneNumber that pulls in the value of the corresponding input using DOM
  + Tip! Remember what you need to include when pulling in a number using DOM.
* Create an empty array named numberArray
* Push both the age and phoneNumber variables into your empty array
* Create a for loop that will loop through numberArray
  + Write an if/elseif statement within the for loop
    - Check to see if the numberArray at index i is less than or equal to 100. If it is, use DOM innerHTML to write "Age: " plus the variable age.
    -  Check to see if the numberArray at index i is greater than 100. If it is, use DOM innderHTML to write "Phone Number: " plus the variable phoneNumber
#
**CSS file**
#
* Refer to the following picture and make your id page look similar
* Include a unique font for your id card
* Give the full page and id card different background colors
* Refer to the following picture and make your id page look similar
  + Pay close attention to the location of the contents
  + Tip! The idCard has already been targetted and has some CSS within it. Make sure to add on to this target when styling the id card. 

![alt text](https://github.com/PhoenixTechJG/1-cfs-fp/blob/master/CSF_FP%20example.png "ID Page Example Image")
