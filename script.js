const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
const resetButton = document.querySelector("#reset")
const searchButton = document.querySelector("#search")
const textLorem = document.querySelector("#text")
let textSplit = textLorem.innerHTML.split(" ")
let id = 630610741
let detect = true
const oldAuthor = "630610741 THIDTANAI KAEWPHET"

btn_toggle.onclick = () => {
  // your code here
  if(detect){
    author.innerHTML = parseInt(id) + parseInt(length.value)
    btn_toggle.innerHTML = "Show Author"
    detect = false
  }else {
    author.innerHTML = oldAuthor
    btn_toggle.innerHTML = "Show Calculation"
    detect = true
  }

}

// more codes for Search and Reset buttons here
resetButton.onclick = () =>  {
  length.value = 5
  color.value = "#FF0000"
  textLorem.style = "color:black;"
}

searchButton.onclick = () => {
  textLorem.style = "color:red"

}

