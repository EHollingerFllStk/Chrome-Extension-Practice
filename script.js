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

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// const inputEl = document.getElementById("input-el");
// let inputBtn = document.getElementById("input-btn");
// // 2. Grab the unordered list and store it in a const variable caled ulEl
// const ulEl = document.getElementById("ul-el");
// //console.log(ulEl)

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

// inputBtn.addEventListener("click", function() {
//   myLeads.push(inputEl.value)
//   console.log(myLeads)
// })


// for (i = 0; i < myLeads.length; i++) {
//   ulEl.textContent += "<li>" + myLeads[i] + "</li>"
// }

// It will list items out like this: 
//  <li>www.awesomelead.com</li><li>www.epiclead.com</li><li>www.greatlead.com</li>
//  Change ulEl.textContent to ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// const inputEl = document.getElementById("input-el");
// let inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");

// inputBtn.addEventListener("click", function() {
//   myLeads.push(inputEl.value)
//   console.log(myLeads)
// })

// Using create element and append
// for (i = 0; i < myLeads.length; i++) {
//   //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//   //create element
//   const li = document.createElement("li")
//   //set text content
//   li.textContent = myLeads[i]
//   //append to ul
//   ulEl.append(li)
// }


// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// const inputEl = document.getElementById("input-el");
// let inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");

// inputBtn.addEventListener("click", function() {
//   myLeads.push(inputEl.value)
//   //console.log(myLeads)
// })


//1. create a variable listItems, to hold all the HTML for the list items
// Assign it to and empty string to begin with
// let listItems = ""

// for (i = 0; i < myLeads.length; i++){
//   let item = document.createElement("li"); 

//   // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
//   listItems += "<li>" + myLeads[i] + "</li>"
//    console.log(listItems)
// }
// // Render the listItems inside theunordered list using ulEl.innerHTML
// ulEl.innerHTML = listItems

//render for loops on the DOM has a cost. Is it better to have to render the HTML each time in the for loop or once outside the for loop.

let myLeads = [];
const inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  //2. call the renderLeads() function
  inputEl.value = "";
  renderLeads();
  // 3. clear out the input field
  //clearInput();
  //Per solution: 

})

// 1. Wrap the cocde below in a renderLeads() function
// function renderLeads() {
//   let listItems = ""

//   for (i = 0; i < myLeads.length; i++) {
//     let item = document.createElement("li");

//     // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
//     listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
//     console.log(listItems)
//   }
//   // Render the listItems inside theunordered list using ulEl.innerHTML
//   ulEl.innerHTML = listItems
// }
// function clearInput() {
//   let getValue = document.getElementById("input-el");
//     if(getValue.value != "") {
//       getValue.value = ""
//     }
// }


///////////USING TEMPLATE STRINGS/////////////////
function renderLeads() {
  let listItems = ""
  for (i = 0; i < myLeads.length; i++) {
    let item = document.createElement("li");
    // listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += `
      <li>
        <a target='_blank' href='${myLeads[i]}'> 
          ${myLeads[i]} 
        </a>
      </li>`
  }
  ulEl.innerHTML = listItems
}
//////TEMPLATE STRINGS PRACTICE
const recipient = "James";
const sender = "Jonny"
const email =
`Hey ${recipient}! 
  
  How is it going? 
  
  Cheers ${sender}`
console.log(email)
