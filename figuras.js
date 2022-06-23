// Código del cuadrado

console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado+ "cm");

    function perimetroCuadrado(lado){
        return lado*4;

    }
    //console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + "cm");

    function areacuadrado(lado){
    return   lado*lado;
    }
    //console.log("El área del cuadrado es: "+ areacuadrado + "cm^2");

console.groupEnd();



// Código del triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6 ;
// const ladoTriangulo2 = 6 ;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;

}

function areaTriangulo(base,altura){
    return (base * altura)/2;
}
// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " +ladoTriangulo2 + "cm, "+baseTriangulo +"cm");
// console.log("La altura del triangulo es: " +alturaTriangulo + "cm") ;
// console.log("El perimetro del triangulo es: " +perimetroCuadrado + "cm");
// console.log("El area del triangulo es: " +areaTriangulo  + "cm^2");
console.groupEnd();



// Código del circulo
console.group("Circulos");

//Radio
// const radioCirculo = 4;

//Diametro
function diametroCirculo(radio){
    return radio*2;
}
// console.log("El diametro del circulo es: " + diametroCirculo+ "cm");
//Pi

const PI = Math.PI;
//Circunferencia
// console.log("PI es:"+PI);
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}
// console.log("El perimetro del circulo es: " + perimetroCirculo+ "cm");

//Area
function areaCirculo(radio){
    return (radio*radio)* PI;
}
// console.log("El area del circulo es: " + areaCirculo+ "cm^2");
console.groupEnd();



// Aqui interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areacuadrado(value);
    alert(area);

}

//Triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(parseInt(value1) ,parseInt(value2) ,parseInt(value3) );
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo3");
    const value1 = input1.value;

    const input2 = document.getElementById("InputTriangulo4");
    const value2 = input2.value;

    const area =  areaTriangulo(value1,value2);
    alert(area);
}

//Circulo

function CalcularPerimetroCirculo(){
    const input1 = document.getElementById("InputCirculo");
    const value1 = input1.value;

    const perimetro = perimetroCirculo(value1);
    alert(perimetro);
}

function CalcularAreaCirculo(){
    const input1 = document.getElementById("InputCirculo");
    const value1 = input1.value;

    const area =  areaCirculo(value1);
    alert(area);
}

function calcularDiametroCirculo(){
    const input1 = document.getElementById("InputCirculo");
    const value1 = input1.value;

    const Diametro = diametroCirculo(value1);
    alert(Diametro);
}
