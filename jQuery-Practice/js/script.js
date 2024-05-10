// Question 1:
// The following three questions are based on the two paragraphs under the section which says,
// "For Question 1".
// 1.1. Select the element with an id of "sample1" using jQuery.

let el=$("#sample1");
// 1.2. Print the element itself on the console upon page refresh.
console.log(el);

// 1.3. Print the content of the element on the console upon page refresh. Use jQuery to
// select the content of the element
console.log(el.html());

// Question 2:
// The following questions are based on the HTML code found under the section labeled "For
// question 2".
// 2.1. Select the element with an ID of "techCompanies" and display it on your console.


let tech=$("#techCompanies");
console.log(tech);
// 2.2. How many tech companies are listed under the ul element with an id of
// "techCompanies"?
let numTech=tech.children().length;
console.log(numTech);
// 2.3. Select all elements with a class of "red" and display them on the console.
let red=$(".red");
console.log(red);

// 2.4. Create a new li HTML element with a content of "Facebook" and display it on console

var newDiv = $('<li> Facebook </li> ');

console.log(newDiv);
// 2.5. Give the newly created element a class of "blue" using jQuery
newDiv.addClass("blue") ;
// 2.6. Append the newly created element next to the the "Sony" <li> element
const newList = $('#techCompanies').append(newDiv);
    
// 2.7. How many of the tech companies are labeled blue? Find the result using jQuery and
// display the result inside the "blueCompanies" div.
let blue=$("#techCompanies .blue");

let h=blue.length;
let yo=$("#blueCompanies");
yo.text(h);


// Question 3:
// A form with two text fields is provided under the section which says "For question 3". Write a
// jQuery code which takes the values of the two fields, checks if they are number values and
// calculate the sum and average of the two numbers.
// 3.1. Display the result on the console
let result=$("#submitButton");

  let yoo=(e)=>{
    e.preventDefault();

  
let first = parseInt($("[name=first-value]").val());
let sec = parseInt($("[name=second-value]").val());
let dis=$("#sum");


if(typeof(first)=="Number"&&typeof(sec)=="Number"){
    dis.text("pls enter number");
}else{
    let sum= first+sec;
    let ava=sum/2;
    console.log(sum);
    console.log(ava);
    dis.text("the sum is "+sum +" and the average is " + ava);
// dis.text(ava);
}
  }
  result.on("click",yoo);






// 3.2. Display the result underneath the form

// 3.3. If any of the numbers provided is not a number, display a message that says "Please
// enter numerical values only" underneath the form



// Question 4:
// Create an HTML form which asks users to provide their First name, Last name and Email
// address. All the fields should be labeled as required. Once the user submits, write a JavaScript
// function that checks if all the fields are provided. If not, it should show an error message above
// the form.

$(document).ready(function() {
  let error = $("#error");
  let result = $("#result");
  let form = $("#form");
  let submit = $("#submitform");

  result.hide();

  submit.click(function() {
    let first = $("#first").val();
    let sec = $("#sec").val();
    let email = $("#email").val();

    if (first === "" && sec === "" && email === "") {
      error.text("Please provide all the values.");
    } else {
      form.hide();
      result.text("Your name is " + first + " " + sec + " and your email is " + email);
      result.show();
    }
  });
});

// If the user provides all the values, hide the form input fields, and display all the values provided
// by the user on the browser.