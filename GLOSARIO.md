# Glosario de TypeScript

Términos de los temas investigados, con una definición breve y un ejemplo simple en TypeScript.

---

### 1. TypeScript
Lenguaje desarrollado por Microsoft que agrega tipado estático opcional a JavaScript. Todo código JavaScript válido también es TypeScript válido.

```ts
let lenguaje: string = "TypeScript";
```

### 2. tsc
Compilador oficial de TypeScript (*TypeScript Compiler*). Verifica los tipos de todo el código y genera los archivos JavaScript. Es la única herramienta del curso que verifica tipos al compilar.

```bash
npx tsc --noEmit   # solo verifica tipos, sin generar archivos
```

### 3. tsx
Herramienta que ejecuta archivos `.ts` directamente, sin compilar antes, y recarga al guardar. No verifica tipos y se usa solo para desarrollo.

```bash
npx tsx watch src/app.ts
```

### 4. tsconfig.json
Archivo de configuración del proyecto. Indica a TypeScript qué archivos incluir, qué tan estricto ser y cómo generar el JavaScript.

```json
{ "compilerOptions": { "strict": true, "outDir": "./dist" }, "include": ["src"] }
```

### 5. Tipado estático
Forma de declarar el tipo de los datos al escribir el código, para que los errores se detecten antes de ejecutar el programa.

```ts
let edad: number = 30;
// edad = "treinta"; // Error: string no se puede asignar a number
```

### 6. Inferencia de tipos
Capacidad de TypeScript de deducir el tipo de una variable a partir de su valor inicial, sin que haga falta escribirlo.

```ts
let ciudad = "Formosa"; // TypeScript infiere string
```

### 7. Array tipado
Lista de elementos del mismo tipo, que se declara con el tipo seguido de `[]`.

```ts
let numeros: number[] = [1, 2, 3];
```

### 8. Tupla
Array con cantidad fija de elementos y un tipo determinado para cada posición.

```ts
let usuario: [string, number] = ["Juan", 25];
```

### 9. Tipo unión
Tipo que permite que un valor sea de uno u otro tipo, escrito con `|`.

```ts
let id: string | number = "ABC123";
id = 456;
```

### 10. any
Tipo que desactiva la verificación de tipos. Se recomienda evitarlo porque los errores aparecen recién al ejecutar el programa.

```ts
let cualquierCosa: any = "texto";
cualquierCosa = 42;
```

### 11. unknown
Tipo que acepta cualquier valor, pero obliga a verificar su tipo antes de usarlo. Es la alternativa segura a `any`.

```ts
let dato: unknown = "texto";
if (typeof dato === "string") {
  console.log(dato.toUpperCase());
}
```

### 12. strict
Opción del `tsconfig.json` que activa todas las verificaciones estrictas: prohíbe el `any` implícito, exige verificar `null` y pide inicializar las propiedades de las clases.

```ts
// Con strict, esto da error: el parámetro x no tiene tipo
// function duplicar(x) { return x * 2; }
function duplicar(x: number): number { return x * 2; }
```

### 13. Parámetro opcional
Parámetro de una función que se puede omitir al llamarla. Se marca con `?` y dentro de la función puede valer `undefined`.

```ts
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
```

### 14. Parámetro por defecto
Parámetro que tiene un valor asignado en la declaración y lo usa si no se envía el argumento.

```ts
function crear(nombre: string, rol: string = "USER"): void {
  console.log(`Usuario ${nombre} con rol ${rol}`);
}
```

### 15. void
Tipo de retorno de una función que no devuelve ningún valor.

```ts
function avisar(): void {
  console.log("Listo");
}
```

### 16. Interface
Describe la forma de un objeto (propiedades y métodos). Puede extenderse con `extends` y no existe en el JavaScript generado.

```ts
interface Usuario {
  id: number;
  nombre: string;
  edad?: number; // propiedad opcional
}
```

### 17. Type alias
Nombre que se le da a un tipo. Se usa para uniones, intersecciones, tipos literales y alias de primitivos.

```ts
type ID = string | number;
```

### 18. Enum
Conjunto fijo de valores con nombre. TypeScript lo convierte en un objeto de JavaScript, por eso no funciona con `node archivo.ts`.

```ts
enum Estado { PENDIENTE = "PENDIENTE", COMPLETADO = "COMPLETADO" }
let estado: Estado = Estado.PENDIENTE;
```

### 19. Tipo literal
Tipo que solo acepta valores exactos. Se borra al ejecutar el programa.

```ts
type Rol = "ADMIN" | "USER" | "GUEST";
let rol: Rol = "ADMIN";
```

### 20. as const
Forma de declarar un objeto con valores fijos que, junto a un tipo derivado, funciona como alternativa moderna al `enum`.

```ts
const Estado = { PENDIENTE: "PENDIENTE", CANCELADO: "CANCELADO" } as const;
type Estado = typeof Estado[keyof typeof Estado];
```

### 21. @types/node
Paquete con las definiciones de tipos de Node.js. Permite que TypeScript reconozca `process`, el módulo `fs`, etc. Se instala y además se declara en el tsconfig con `"types": ["node"]`.

```ts
console.log(process.version);
```

### 22. Type stripping
Forma en que `node archivo.ts` ejecuta TypeScript: borra las anotaciones de tipos y ejecuta el JavaScript que queda, sin verificar tipos.

```ts
let edad: number = 30; // Node lo ejecuta como: let edad = 30;
```