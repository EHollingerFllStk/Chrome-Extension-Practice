// function onClick() {
//   console.log("Button clicked!")
// }
// Rather than using the above developers use the above for cleaner seperation of operations

// let inputBtn = document.getElementById("input-btn")
// inputBtn.addEventListener("click", function() {
//   console.log("Button clicked")
// })

// //Grab the box from the DOM and store it in a variable
// let box = document.getElementById("box")
// //add a click event listener to the box
// box.addEventListener("click", function() {
//   //Log out "I want to open the box!" when it's clicked
//   console.log("I want to open the box!")
// })

//Create two variables:
//myLeads --> should be assigned to an empty array
//inputEl -> should be assigned to the text input 

let myLeads = [];
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")

// push the value "www.awesomelead.com" to myArray when the input button is clicked
// inputBtn.addEventListener("click", function() {
//   myLeads.push("www.awesomelead.com")
//   console.log(myLeads)
//   //console.log("Button clicked")
// })



inputBtn.addEventListener("click", function() {
  // Push the value from the inputEl into the myLeads array
  // instead of the hard-coded "www.awesomelead.com" 
  // Google -> "get value from input field javascript"
  myLeads.push(inputEl.value)
  console.log(myLeads)
  //console.log("Button clicked")
})


