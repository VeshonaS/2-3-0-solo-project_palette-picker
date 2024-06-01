import { premadePalettes } from "./main";



// input new palette 
const form = document.querySelector('form')

const newPaletteSubmit = (e)=> {
  e.preventDefault()

 const newPal = e.target

 const temperature = newPal.temperature.value;
 const caption = newPal.title.value;
 const colors = newPal.colors.value;

 premadePalettes({temperature, caption, colors})

 newPal.reset()
}

form.addEventListener('submit' , newPaletteSubmit )

