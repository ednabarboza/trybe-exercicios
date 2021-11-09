//Questão 1
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index+=1){
  console.log(numbers[index]);
}*/

//Questão 2
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let index = 0; index < numbers.length; index +=1){
  soma += numbers[index];
}
console.log(soma);*/

// Questão 3 e 4 

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
for(let index = 0; index < numbers.length; index +=1){
  media += numbers[index]/numbers.length;
}
  if(media > 20){
    console.log("valor maior que 20");
  }else{
    console.log("valor menor ou igual a 20");
  }*/

  // Questão 5
  /*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let maiorNum = numbers[0];
  for(let index = 1; index < numbers.length; index += 1){
    if(numbers[index] > maiorNum){
      maiorNum = numbers[index];
    }
    
  }

  console.log (maiorNum);
*/

//Questão 6
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contagemImpares = 0;

for (let index = 0; index < numbers.length; index +=1){
  if(numbers[index] % 2 === 1){
    contagemImpares +=1;  
  }
}

if(contagemImpares ===0){
  console.log("nenhum valor ímpar encontrado");
}else{
  console.log(contagemImpares);
}*/

//Questão 7

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (let index = 1; index < numbers.length; index +=1){
  if(numbers[index] < menor){
    menor = numbers[index];
  }
}
console.log(menor); */

//Questão 8 e 9

let numeros = [];
for (let index = 1; index < 26; index += 1){
  numeros.push(index);
}
console.log(numeros);

for (let index = 0; index < numeros.length; index +=1){
  console.log(numeros[index]/2);
};

