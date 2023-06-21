document.querySelector('#menos').addEventListener('click', () => {
  num -= 1; setColor(); atualizar()})
document.querySelector('#mais').addEventListener('click', () => {
  num += 1; setColor(); atualizar()})
document.querySelector('#reset').addEventListener('click', ()=>{
  num = 0;  atualizar(); setColor()})

const number = document.querySelector('#number')
let num = parseFloat(number.textContent)

function setColor(){
  if(num > 0) {
    number.classList.add('positive')
    number.classList.remove('negative')
  }else if (num < 0) {
    number.classList.add('negative')
    number.classList.remove('positive')
  } else {
    number.classList.remove('positive', 'negative')
  }
}

function atualizar(){
  number.textContent = num
}