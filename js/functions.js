console.log("prueba de enlazamiento");
//tipo de variable

//const para variables constantes



const pi = 3.1416;
const pu = 2.54;
const name = "Keiner";

//var para variables globales

var cal_days = 30;

//let para variables locales o de bloque
let j=0;
let count = 1;

//formas de impresion

// alert(name);
 console.log(name);
console.log(cal_days);
console.log("15");

// pantalla = body

document.write(name);
//document.getElementById("box_one").innerHTML = "<h1> Keiner Ballesteros</h1>";
// document.getElementById("box_two").innerText = "<h1> Keiner Ballesteros</h1>";

//librerias
/*
Swal.fire({
    icon:'info',
    title: 'Keiner Ballesteros',
    text:name,
    footer:name,
    showConfirmButton: false,
    timer: 2000,
    position: 'center-end'
}
    
  )
  */
 // Swal.fire(name);

 //tipos de datos

 //numericos
 var number = 10;
 var number_two = 2.3;

 //String 
 var text="soy un texto";

 //booleanos
 var boolean = true; //false

 //array

 let array =[1,5,7];
 let array_text =["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
 let array_mix =[ 1, "as",2,true];
 let array_nul =[
    {name:"Keiner", last_name: "Ballesteros",age: "17"},
    {name:"Pedro", last_name:"Miguel",age: "20"},
    {name:"juan", last_name:"martinez",age: "15"},
    {name:"maria", last_name:"perez",age: "21"}
 ];
 //*****  Operadores basicos
 //suma
 var suma = number+number_two;
 console.log("suma = "+suma);

 //resta
 var resta = number-number_two;
 console.log("resta = "+resta);

 //multiplication
 var product = number*number_two;
 console.log("product = "+product);

 //Division
 var cocient = number/number_two;
 console.log("cocient = "+cocient);

 //modulo 
 var modulo = number% number_two;
 console.log("modulo = "+modulo);
console.log(
    "modulo = "+modulo +"\n"+
    "cocient = "+cocient+"\n"+
    "product = "+product+"\n"+
    "resta = "+resta+"\n"+
    "suma = "+suma
);

var respuesta = "modulo = "+modulo +"<br>"+
"cocient = "+cocient+"<br>"+
"product = "+product+"<br>"+
"resta = "+resta+"<br>"+
"suma = "+suma

Swal.fire(respuesta);

Swal.fire({
    showConfirmButton :false,
    background: "#000",
    icon:'succes',
    title:'respuesta',
    html:respuesta
}
);