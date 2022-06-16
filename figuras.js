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