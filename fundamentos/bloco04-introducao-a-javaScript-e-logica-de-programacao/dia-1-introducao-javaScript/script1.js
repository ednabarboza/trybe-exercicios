let patientId = 50;
console.log (typeof patientId);
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientAge);

const base = 5;
let height = 8;

const area = base * height;
console.log(area);

const perimeter = (base*2)+(height*2);
console.log(perimeter); 

const nota = 90;

if (nota>=80){
    console.log("Parabéns, você foi aprovada(o)!")
}else if (nota<80 && nota >= 60){
    console.log("Você está na nossa lista de espera")
}else{
    console.log("Você foi reprovada(o)")
}

console.log(false && true);

const currentHour = 23;
let message = "";

if (currentHour>=22){
    console.log("Não deveríamos comer nada, é hora de dormir")
}else if (currentHour>=18 && currentHour<22){
    console.log("Rango da noite, vamos jantar")
}else if (currentHour >=14 && currentHour<18){
    console.log("Vamos fazer um bolo pro café da tarde?")
}else if(currentHour>=11 && currentHour<14){
    console.log ("Hora do almoço!!!")
}else if(currentHour>=4 && currentHour<11){
    console.log("Hmmm, cheiro de café recém passado")
}

console.log(message);


let weekDay = "terça-feira";

if(weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}else if (weekDay === "sábado" || weekDay === "domingo"){
    console.log("FINALMENTE, descanso merecido UwU")
}else{
    console.log("Não corresponde a um dia na semana")
}

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

console.log(!null); // true

console.log(!undefined); // true

let estado = "xablau";

switch(estado){
    case("aprovada"):
    console.log("Você passou!")
    break;

    case("lista"):
    console.log("Você está na fila de espeta")
    break;

    case("reprovada"):
    console.log("Infelizmente você não passou.")
    break;

    default:
    console.log("Valor inválido")
}