/* 1.- Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no. */
console.log("Ejercicio 1");
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

function arbolesIdenticos(arbolA, arbolB) {
    // Si ambos árboles son nulos, son idénticos
    if (arbolA === null && arbolB === null) {
        return true;
    }
    
    // Si solo uno de los árboles es nulo o los valores de los nodos son diferentes, no son idénticos
    if (arbolA === null || arbolB === null || arbolA.valor !== arbolB.valor) {
        return false;
    }
    
    // Compara recursivamente las subárboles izquierdos y derechos
    return arbolesIdenticos(arbolA.izquierda, arbolB.izquierda) && arbolesIdenticos(arbolA.derecha, arbolB.derecha);
}

// Creamos dos árboles binarios idénticos
let arbolA = new Nodo(1);
arbolA.izquierda = new Nodo(2);
arbolA.derecha = new Nodo(3);

let arbolB = new Nodo(1);
arbolB.izquierda = new Nodo(2);
arbolB.derecha = new Nodo(3);

console.log(arbolesIdenticos(arbolA, arbolB)); // Output: true

// Creamos dos árboles binarios diferentes
let arbolC = new Nodo(1);
arbolC.izquierda = new Nodo(2);

let arbolD = new Nodo(1);
arbolD.derecha = new Nodo(2);

console.log(arbolesIdenticos(arbolC, arbolD)); // Output: false

console.log("Ejercicio 2");

/* 2.- Escribe una función que dado un árbol binario A, obtenga una copia B del mismo. */

function copiarArbol(arbol) {
    if (arbol === null) {
        return null;
    }
    
    let nuevoNodo = new Nodo(arbol.valor);
    nuevoNodo.izquierda = copiarArbol(arbol.izquierda);
    nuevoNodo.derecha = copiarArbol(arbol.derecha);
    
    return nuevoNodo;
}

// Ejemplo de uso
let raizA = new Nodo(1);
raizA.izquierda = new Nodo(2);
raizA.derecha = new Nodo(3);

// Copiar el árbol A
let raizB = copiarArbol(raizA);

console.log("Arbol original",raizA); // Árbol original
console.log("Arbol copia",raizB); // Copia del árbol original

console.log("Ejercicio 3");

/* 3.- Escribe una función que visualice los nodos que están en el nivel n de un árbol binario. */

function nodosEnNivel(arbol, nivel, nivelActual = 0) {
    if (arbol === null) {
        return;
    }

    if (nivelActual === nivel) {
        console.log(arbol.valor);
    }

    nodosEnNivel(arbol.izquierda, nivel, nivelActual + 1);
    nodosEnNivel(arbol.derecha, nivel, nivelActual + 1);
}

// Ejemplo de uso
let raiz = new Nodo(1);
raiz.izquierda = new Nodo(2);
raiz.derecha = new Nodo(3);
raiz.izquierda.izquierda = new Nodo(4);
raiz.izquierda.derecha = new Nodo(5);
raiz.derecha.izquierda = new Nodo(6);
raiz.derecha.derecha = new Nodo(7);

console.log("Nodos en el nivel 2:");
nodosEnNivel(raiz, 2); // Imprimirá los nodos en el nivel 2 del árbol
console.log("Ejercicio 4");
/* 4.- Escribe una función que devuelva el número de hojas de un árbol binario. */
function contarHojas(arbol) {
    if (arbol === null) {
        return 0;
    }
    if (arbol.izquierda === null && arbol.derecha === null) {
        return 1;
    }
    // Recursivamente contar hojas en el subárbol izquierdo y derecho
    return contarHojas(arbol.izquierda) + contarHojas(arbol.derecha);
}

// Ejemplo de uso
let raiz4 = new Nodo(1);
raiz4.izquierda = new Nodo(2);
raiz4.derecha = new Nodo(3);
raiz4.izquierda.izquierda = new Nodo(4);
raiz4.izquierda.derecha = new Nodo(5);
raiz4.derecha.derecha = new Nodo(6);

console.log("Número de hojas:", contarHojas(raiz4)); // Output: 3
