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

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// const inputEl = document.getElementById("input-el")
// let inputBtn = document.getElementById("input-btn")


// push the value "www.awesomelead.com" to myArray when the input button is clicked
// inputBtn.addEventListener("click", function() {
//   myLeads.push("www.awesomelead.com")
//   console.log(myLeads)
//   //console.log("Button clicked")
// })

// inputBtn.addEventListener("click", function() {
//   // Push the value from the inputEl into the myLeads array
//   // instead of the hard-coded "www.awesomelead.com" 
//   // Google -> "get value from input field javascript"
//   myLeads.push(inputEl.value)
//   console.log(myLeads)
//   //console.log("Button clicked")
// })

// log out the items in the myLeads array using a for loop

let myLeads = [];
const inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
// 2. Grab the unordered list and store it in a const variable caled ulEl
const ulEl = document.getElementById("ul-el");
//console.log(ulEl)

// inputBtn.addEventListener("click", function() {
//   myLeads.push(inputEl.value)
//   for (i = 0; i < myLeads.length; i++) {
//   ulEl.textContent = myLeads[i]
//   console.log(myLeads)
//   }
// })
// // render the leads in the unordered list using the ulEl.textContent
// for (i = 0; i < myLeads.length; i++) {
//   ulEl.textContent = myLeads[i]
//   console.log(myLeads[i])
// }

//Per's solution:

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
})

for (i = 0; i < myLeads.length; i++) {
  ulEl.textContent += myLeads[i] + " "
}

