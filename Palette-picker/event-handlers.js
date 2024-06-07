import {premadePalettes} from "./main.js";



const submitPal = (e)=> {
e.preventDefault()
const newPal = new FormData(e.target);
const formObj = {
  title: newPal.get('title'),
 colors: [ 
  newPal.get('color1'),
  newPal.get('color2'),
  newPal.get('color3')
 ],
temperature:newPal.get('temperature')
}
premadePalettes(formObj)

  const json = JSON.stringify(formObj)
  localStorage.setItem('json',json)
  console.log(localStorage)

}
const form = document.getElementById("new-palette")
form.addEventListener('submit', submitPal)

