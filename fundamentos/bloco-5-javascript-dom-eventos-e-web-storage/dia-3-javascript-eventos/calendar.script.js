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
  //console.log(dezDaysList[index])   

  if(dezDaysList[index] === 24 || dezDaysList[index] === 31){
    day.classList.add("day")
    day.classList.add("holiday")
   } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18  ) {
    day.classList.add("day")
    day.classList.add("friday")
  } else if (dezDaysList[index] === 25 ){ 
    day.classList.add("day")
    day.classList.add("friday")
    day.classList.add("holiday")
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
btnFeriado.addEventListener('click', corFeriados)

function corFeriados (){
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

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

 const btnFriday = document.getElementById("btn-friday"); // Captura o botão "sexta-feira"
 btnFriday.addEventListener('click', selecionaSextas); // Ouvidor de click que dispara a função selecionaSextas
 const sextou = "Sextou 'o/'"
 let datas = [] //Array vazio para armazernar as datas que são sextas-feiras

function selecionaSextas (){ //Função que altera o texto das sextas
 let classFriday =  document.querySelectorAll('.friday'); // Seleciona todas as sextas
 for (let index = 0; index < classFriday.length; index += 1){ //Percorre todas as sextas
  datas.push(classFriday[index].innerHTML) // e guarda o valor no array datas

   if(classFriday[index].innerHTML !== sextou) { 
    classFriday[index].innerHTML = sextou
   } else if (classFriday[index].innerHTML === sextou){
      classFriday[index].innerHTML = datas[index]
   }  
  }
} 

// Exercício 6
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original. 

function aumentaZoom () {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
} aumentaZoom()

function diminuiZoom () {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
} diminuiZoom()

// Exercício 7
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .


function addTarefa (tarefa) { 
  let myTasks = document.querySelector('.my-tasks'); //Captura o elemento Pai;
  let novaTarefa = document.createElement('span'); //cria o novo elemento;
  
  myTasks.appendChild(novaTarefa) //Faz com que o novo elemento seja filho de Pai;

  novaTarefa.innerHTML = tarefa //O texto do novo elemento é o parametro da função;
}addTarefa('Nova Tarefa')


// Exercício 8
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function legendaComCor(cor) {
  let divLegenda = document.createElement('div');
  divLegenda.classList.add('task')
  divLegenda.style.backgroundColor = cor
  
  let myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(divLegenda)
}legendaComCor("red")

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function selecionaTarefa () {
  let tarefaTask = document.querySelector('.task');

  tarefaTask.addEventListener('click', function(event){
    event.target.classList.toggle('selected') // https://www.w3schools.com/jsref/prop_element_classlist.asp
    console.log(event.target.classList)
  })

}selecionaTarefa()


// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .



// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key .
