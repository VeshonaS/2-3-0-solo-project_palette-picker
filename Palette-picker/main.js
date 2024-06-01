import './style.css';
 import palettes from'./palettes.json'

// make each palette 
export const premadePalettes = (pal)=> {
  const { temperature , title , colors  } = pal

  const palettePlace = document.getElementById('made-palettes')
  const palette = document.createElement('li')
  const caption = document.createElement('p')
  const temp = document.createElement('p')
  const color1 = document.createElement('div')
  const color2 = document.createElement('div')
  const color3 = document.createElement('div')

  palettePlace.appendChild(palette)
  palette.append(color1 , color2 , color3)
  palette.append(caption , temp )

  color1.style.backgroundColor = colors[0]
  color2.style.backgroundColor = colors[1]
  color3.style.backgroundColor = colors[2]
  caption.textContent = title
  temp.textContent = temperature

  palette.classList.add('each-card') ;
  temp.classList.add('temp') ;
  caption.classList.add('title') ;
  //   

}

const makePalettes = () =>{
  palettes.forEach(premadePalettes)
}

makePalettes()
