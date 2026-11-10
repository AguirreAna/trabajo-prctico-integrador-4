console.log("Tema 5: Interfaces y type");
console.log("=================================");
console.log("¿Qué es una interfaz y para qué sirve?");
console.log("=================================");
console.log("Una interfaz es un contrato que define la forma de un objeto, especificando las propiedades y métodos que debe tener. Sirve para garantizar que los objetos cumplan con una estructura específica.");

console.log("=================================");
console.log("¿Qué es un type?");
console.log("=================================");
console.log("Un type (tipo) es una forma de definir un alias para un tipo de datos, que puede ser primitivo, unión, intersección o cualquier otra estructura. Permite crear tipos más complejos y reutilizables.");

console.log("=================================");
console.log("¿Cómo se declara una propiedad opcional?");
console.log("=================================");
console.log("En TypeScript, se declara una propiedad opcional utilizando el signo de interrogación (?) después del nombre de la propiedad en la interfaz o type. Por ejemplo: 'propiedad?: string;'");

console.log("=================================");
console.log("¿Cuándo conviene usar cada uno?");
console.log("=================================");
console.log("Se recomienda usar interfaces cuando se desea definir la forma de un objeto y se espera que pueda ser implementada por clases o extendida por otras interfaces. Los types son más flexibles y se utilizan para crear alias de tipos complejos, uniones o intersecciones, y cuando no se necesita la capacidad de implementación o extensión.");    

//interface ejemplo de uso
interface Persona {
    nombre: string;
    edad: number;
    direccion?: string; // propiedad opcional
}

const persona1: Persona = {
    nombre: "Juan",
    edad: 30
};

const persona2: Persona = {
    nombre: "Ana",
    edad: 25,
    direccion: "Calle Falsa 123"
};

console.log("=================================");
console.log("Ejemplo de uso de interfaces:");
console.log("persona1:", persona1);
console.log("persona2:", persona2);

//extension de interfaces
interface Empleado extends Persona {
    puesto: string;
}

const empleado1: Empleado = {
    nombre: "Carlos",
    edad: 40,
    puesto: "Gerente"
};

console.log("=================================");
console.log("Ejemplo de extensión de interfaces:");
console.log("empleado1:", empleado1);

//type ejemplo de uso
type Coordenadas = {
    x: number;
    y: number;
};

const punto1: Coordenadas = {
    x: 10,
    y: 20
};

console.log("=================================");
console.log("Ejemplo de uso de type:");
console.log("punto1:", punto1);

//union type ejemplo
type ID = string | number;

const id1: ID = "abc123";
const id2: ID = 456;

console.log("=================================");
console.log("Ejemplo de union type:");
console.log("id1:", id1);
console.log("id2:", id2);

//intersection type ejemplo
type Contacto = {
    email: string;
};

type Cliente = Persona & Contacto;

const cliente1: Cliente = {
    nombre: "Lucía",
    edad: 28,
    email: "lucia@example.com"
};

console.log("=================================");
console.log("Ejemplo de intersection type:");
console.log("cliente1:", cliente1);

//cuando conviene usar cada uno
console.log("=================================");
console.log("Cuándo conviene usar interfaces y types:");
console.log("=================================");
console.log("Usar interfaces cuando se necesita definir la forma de un objeto y se espera que pueda ser implementada o extendida. Usar types cuando se necesita crear alias de tipos complejos, uniones o intersecciones, o cuando no se requiere la capacidad de implementación o extensión.");