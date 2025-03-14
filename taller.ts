//1

function reversa<T>(arr: T[]): T[] {
    let reversedArray: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

const numeros123 = [1, 2, 3, 4, 5];
console.log(reversa(numeros123)); 

const palabras23 = ["Hola", "Mundo", "TypeScript"];
console.log(reversa(palabras23)); 


//2
interface Par<T, U> {
    primero: T;
    segundo: U;
}
function concatenarPar<T, U>(par: Par<T, U>): string {
    return `${par.primero} ${par.segundo}`;
}
const parNumeros: Par<number, string> = { primero: 10, segundo: "manzanas" };
console.log(concatenarPar(parNumeros)); 

const parMixto: Par<string, boolean> = { primero: "Verdadero", segundo: true };
console.log(concatenarPar(parMixto)); 

//3
const numeros45: number[] = [1, 2, 3, 4, 5];
const palabras78: string[] = ["Hola", "Mundo", "TypeScript"];

function filtrar<T>(arr: T[], criterio: (elemento: T) => boolean): T[] {
    let resultado: T[] = [];
    for (let elemento of arr) {
        if (criterio(elemento)) {
            resultado.push(elemento);
        }
    }
    return resultado;
}

const numerosFiltrados = filtrar(numeros45, (num: number) => num < 2);
console.log(numerosFiltrados); 

const palabrasFiltradas = filtrar(palabras78, (palabra: string) => palabra.length < 4);
console.log(palabrasFiltradas); 


//4
class Repositorio<T> {
    private elementos: T[] = []; 
    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    obtener(indice: number): T | undefined {
        return this.elementos[indice];
    }
    eliminar(indice: number): void {
        if (indice >= 0 && indice < this.elementos.length) {
            this.elementos.splice(indice, 1);
        }
    }

    listar(): T[] {
        return this.elementos;
    }
}
const almacenNumeros = new Repositorio<number>();
almacenNumeros.agregar(10);
almacenNumeros.agregar(20);
almacenNumeros.agregar(30);
console.log(almacenNumeros.obtener(0)); 
almacenNumeros.eliminar(2);
console.log(almacenNumeros.listar()); 

const almacenPalabras = new Repositorio<string>();
almacenPalabras.agregar("Hola");
almacenPalabras.agregar("Mundo");
console.log(almacenPalabras.listar()); 