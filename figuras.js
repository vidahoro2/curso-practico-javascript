// Código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;

    console.log("Los lados del cuadrado miden: "+ ladoCuadrado+ "cm");

    const perimetroCuadrado = ladoCuadrado*4;
    console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + "cm");

    const areacuadrado = ladoCuadrado*ladoCuadrado;
    console.log("El área del cuadrado es: "+ areacuadrado + "cm^2");

console.groupEnd();
// Código del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6 ;
const ladoTriangulo2 = 6 ;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " +ladoTriangulo2 + "cm, "+baseTriangulo +"cm");
console.log("La altura del triangulo es: " +alturaTriangulo + "cm") ;
console.log("El perimetro del triangulo es: " +perimetroCuadrado + "cm");
console.log("El area del triangulo es: " +areaTriangulo  + "cm^2");
console.groupEnd();

// Código del circulo
console.group("Circulos");

//Radio
const radioCirculo = 4;

//Diametro
const diametroCirculo = radioCirculo*2;
console.log("El diametro del circulo es: " + diametroCirculo+ "cm");
//Pi

const PI = Math.PI;
//Circunferencia
console.log("PI es:"+PI);
const perimetroCirculo = diametroCirculo*PI;
console.log("El perimetro del circulo es: " + perimetroCirculo+ "cm");

//Area
const areaCirculo = (radioCirculo*radioCirculo)* PI;
console.log("El area del circulo es: " + areaCirculo+ "cm^2");
console.groupEnd();