console.log("=================================");
console.log("Tema 6: Enums y tipos literales");
console.log("=================================");
console.log("¿Qué es un enum?");
console.log("=================================");
console.log("Un enum (enumeración) es un tipo de dato que permite definir un conjunto de valores constantes con nombres simbólicos.");

console.log("=================================");
console.log("¿Qué es un tipo literal?");
console.log("=================================");
console.log("Un tipo literal es un tipo de dato que permite definir un conjunto de valores específicos que una variable puede tomar, como cadenas o números literales.");

console.log("=================================");
console.log("¿En qué se parecen y en qué se diferencian?");
console.log("=================================");
console.log("Se parecen en que ambos permiten definir conjuntos de valores específicos. Se diferencian en que los enums son más adecuados para representar estados o categorías, mientras que los tipos literales son más flexibles y pueden ser utilizados para restringir valores a un conjunto específico.");

console.log("=================================");
console.log("¿En qué situaciones se puede usar cada uno?");
console.log("=================================");
console.log("Se puede usar un enum cuando se necesita representar un conjunto de valores constantes con nombres simbólicos, como días de la semana o estados de un proceso. Se puede usar un tipo literal cuando se desea restringir los valores de una variable a un conjunto específico, como colores o tamaños predefinidos.");

//enum ejemplo de uso
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

const colorFavorito: Color = Color.Verde;

console.log("=================================");
console.log("Ejemplo de uso de enums:");
console.log("colorFavorito:", colorFavorito);

//tipo literal ejemplo de uso
type Tamanio = "Pequeño" | "Mediano" | "Grande";

const tamanioCamiseta: Tamanio = "Mediano";

console.log("=================================");
console.log("Ejemplo de uso de tipos literales:");
console.log("tamanioCamiseta:", tamanioCamiseta);

//comparacion de enums y tipos literales
console.log("=================================");
console.log("Comparación de enums y tipos literales:");
console.log("=================================");
console.log("Enums:");
console.log("- Permiten definir un conjunto de valores constantes con nombres simbólicos.");
console.log("- Son más adecuados para representar estados o categorías.");
console.log("- Se pueden utilizar en estructuras de control como switch.");

console.log("Tipos literales:");
console.log("- Permiten restringir los valores de una variable a un conjunto específico.");
console.log("- Son más flexibles y se pueden combinar con otros tipos.");
console.log("- Se utilizan para definir valores específicos que una variable puede tomar.");
