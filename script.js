// function onClick() {
//   console.log("Button clicked!")
// }
// Rather than using the above developers use the above for cleaner seperation of operations

// let inputBtn = document.getElementById("input-btn")
// inputBtn.addEventListener("click", function() {
//   console.log("Button clicked from addEvent listener")
// })

//Grab the box from the DOM and store it in a variable
let box = document.getElementById("box")
//add a click event listener to the box
box.addEventListener("click", function() {
  //Log out "I want to open the box!" when it's clicked
  console.log("I want to open the box!")
})

