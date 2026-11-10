console.log("=================================");
console.log("Tema 4: Funciones");
console.log("=================================");

console.log("=================================");
console.log("¿Cómo se indican los tipos de los parámetros?");
console.log("=================================");
console.log("Se indican después del nombre del parámetro, separados por dos puntos.");

console.log("=================================");
console.log("¿Cómo se indica el tipo de retorno?");
console.log("=================================");
console.log("Se indica después de los parámetros, separados por una flecha.");

console.log("=================================");
console.log("¿Qué es un parámetro opcional?");
console.log("=================================");
console.log("Es un parámetro que no es obligatorio y puede ser omitido al llamar a la función.");

console.log("=================================");
console.log("¿Qué es un parámetro por defecto?");
console.log("=================================");
console.log("Es un parámetro que tiene un valor predeterminado en caso de que no se proporcione uno al llamar a la función.");

//funcion basica con tipado de parametro y retorno
function suma(a: number, b: number): number {
    return a + b;
}

console.log("=================================");
console.log("Ejemplo de función con parámetros y retorno tipados:");
console.log("suma(2, 3) =", suma(2, 3));

//funcion con parametro opcional
function saludo(nombre: string, edad?: number): string {
    if (edad) {
        return `Hola ${nombre}, tienes ${edad} años.`;
    } else {
        return `Hola ${nombre}.`;
    }
}

console.log("=================================");
console.log("Ejemplo de función con parámetro opcional:");
console.log("saludo('Juan') =", saludo('Juan'));
console.log("saludo('Ana', 25) =", saludo('Ana', 25));

//funcion con parametro por defecto y retorno void
function despedida(nombre: string, mensaje: string = "Adiós"): void {
    console.log(`${mensaje}, ${nombre}.`);
}

console.log("=================================");
console.log("Ejemplo de función con parámetro por defecto y retorno void:");
despedida('Carlos');
despedida('Lucía', 'Hasta luego');

//arrow function con tipado de parametro y retorno
const multiplicar = (x: number, y: number): number => {
    return x * y;
};

console.log("=================================");
console.log("Ejemplo de arrow function con parámetros y retorno tipados:");
console.log("multiplicar(4, 5) =", multiplicar(4, 5));

function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
}

console.log("=================================");
console.log("Ejemplo de función con parámetros rest:");
console.log("sumarTodos(1, 2, 3, 4, 5) =", sumarTodos(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));