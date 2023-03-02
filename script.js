// function onClick() {
//   console.log("Button clicked!")
// }
// Rather than using the above developers use the above for cleaner seperation of operations

let inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function() {
  console.log("Button clicked from addEvent listener")
})

