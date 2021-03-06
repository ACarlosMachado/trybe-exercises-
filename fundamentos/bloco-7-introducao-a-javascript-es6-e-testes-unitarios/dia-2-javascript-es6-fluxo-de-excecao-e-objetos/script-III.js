const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
// 1)Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function sessionNight (obj, keys, value){
    obj[keys] = value
}sessionNight(lesson2, 'turno', 'noite')

// 2)Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function keys(obj) {
Object.keys(obj)
}keys(lesson3)

// 3)Crie uma função para mostrar o tamanho de um objeto.

function objLength (obj) {
    Object.keys(obj).length
}objLength(lesson1)

// 4)Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function value(obj) {
    Object.values(obj)
    }value(lesson3)

// 5)Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
//console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// 6) Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const getNumberOfStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
      total += obj[array[index]].numeroEstudantes;
    }
    return total;
  };
  console.log(getNumberOfStudents(allLessons));

  // 7) Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
  // console.log(getValueByNumber(lesson1, 0));
  // Output: 'Matématica'