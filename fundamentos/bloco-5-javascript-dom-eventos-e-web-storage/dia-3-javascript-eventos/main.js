const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Resposta: Porque ao carregar a página a primeira 'li' está com a class "tech".

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso? 

let li = document.getElementsByTagName('li') //Laço for para percorrer as 'li' 
for (let index = 0; index < li.length; index+=1){
    let liSelected = li[index]
    li[index].addEventListener('click',adicionaClasse) // A 'li' selecionada dispara o evento 
}
function adicionaClasse(event){
    let haveTech = document.querySelector('.tech')
    haveTech.classList.remove("tech")
    event.target.classList.add("tech");
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('keyup', alteraCorTech) // input recebe um escutador de evento que ao soltar a tecla do teclado dispara a função alteraCor()

function alteraCorTech (){ 
  let haveTech = document.querySelector('.tech') //Captura o elemento que contém a classe 'tech';
  haveTech.style.backgroundColor = input.value  // O elemento capturado na linha anterior recebe a cor de fundo digitada no input
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

myWebpage.addEventListener('dblclick', myGitHub) // myWebpage recebe um escutador de evento que ao dar duplo click dispara a função myGitHub()


function myGitHub () {
  window.location.href = "https://github.com/ACarlosMachado" // Consultei o seguinte link: https://pt.stackoverflow.com/questions/3312/como-redirecionar-o-usu%C3%A1rio-para-outra-p%C3%A1gina-em-javascript-jquery
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseenter', colorMyWebPage) 

function colorMyWebPage() {
  myWebpage.style.color = "orange"
}

myWebpage.addEventListener('mouseout', colorOriginMyWebPage)

function colorOriginMyWebPage() {
  myWebpage.style.color = "white"
}


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.