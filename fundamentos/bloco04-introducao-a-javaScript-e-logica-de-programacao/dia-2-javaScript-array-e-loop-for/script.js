//Exercício 1
/*
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços'); 

console.log(menuServices); */

//Exercício 2

/*let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio); */

//Exercício 3

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);


//Exercício 1 (For)

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index++){
    console.log(groceryList[index]);
}

// Exercício 1 (For/Of)

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let words of names){
    console.log(words);
}