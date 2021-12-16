function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//   Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let lista = document.getElementById('days');

function creatDates (){

for (let index = 0; index < dezDaysList.length; index += 1) {
  let day = document.createElement('li');
 // day.classList.add("day")
  day.innerHTML = dezDaysList[index]
  lista.appendChild(day);
  console.log(dezDaysList[index])   

  if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
    day.classList.add("day")
    day.classList.add("holiday")
   } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25 ) {
    day.classList.add("day")
    day.classList.add("friday")
  } else {
    day.classList.add("day")
  }
}
} creatDates()

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
let buttons = document.querySelector(".buttons-container")
function holiday() {

  let btn = document.createElement('button')
  btn.setAttribute("id", "btn-holiday") // https://stackoverflow.com/questions/19625646/javascript-adding-an-id-attribute-to-another-created-element
  var lbl = document.createTextNode("Feriados") //https://pt.stackoverflow.com/questions/217656/criar-botao-usando-document-createelement
  btn.appendChild(lbl)
  
  
  buttons.appendChild(btn)
} holiday()

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

const btnFeriado = document.getElementById("btn-holiday");
btnFeriado.addEventListener('click', clickBtn)

function clickBtn (){
 let classHoliday =  document.getElementsByClassName('holiday');
 for (let index = 0; index < classHoliday.length; index += 1) {
   if(classHoliday[index].style.backgroundColor === "rgb(117, 207, 224)") {
    classHoliday[index].style.backgroundColor = "rgb(238,238,238)"
   } else {
    classHoliday[index].style.backgroundColor = "rgb(117, 207, 224)"
   }  
 }
} 

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function creatBtnFriday (){
  let btnFriday = document.createElement('button');
  btnFriday.setAttribute('id', 'btn-friday');
  let txt = document.createTextNode('Sexta-feira');
  btnFriday.appendChild(txt)
  buttons.appendChild(btnFriday)
}creatBtnFriday()
