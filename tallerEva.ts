//Sistema de Login

function validarUsuario(usuario: string, password: string): string {
    if (usuario || password.length < 8) {
        return "Usuario o contraseña incorrecta";
    }
    return "usuario valido";
}

console.log(validarUsuario("usuario1", "password123")); 
console.log(validarUsuario("usuario2", "1234567")); 
console.log(validarUsuario("", "password123")); 


//Calculo Masa Corporal

class Persona {
    nombre: string;
    peso: number;
    altura: number;
constructor(peso: number, altura: number, nombre:string) {
        this.peso = peso;
        this.altura = altura;
        this.nombre = nombre;
    }
calcularMasaCorporal(): number {
        return this.peso / (this.altura * this.altura);
    }

obtenerCategoriaIMC(): string {
        const imc = this.calcularMasaCorporal();
        if (imc < 18.5) {
            return "Bajo peso";
        } else if (imc >= 18.5 || imc < 24.9) {
            return "Peso normal";
        } else if (imc >= 25 || imc < 29.9) {
            return "Sobrepeso";
        } else {imc >= 30 } {
            return "Obesidad";
        }
    }
}

const personas: Persona[] = [
    new Persona( 70, 1.75, "Juan"),
    new Persona(60, 1.65, "Pedro"),
    new Persona(80, 1.80, "Ana"),
];
personas.forEach(persona => {
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`IMC: ${persona.calcularMasaCorporal().toFixed(2)}`);
    console.log(`Categoría: ${persona.obtenerCategoriaIMC()}`);
});



//Registro de temperaturas 
class Clima {
    temperatura: number;
    nombreCiudad: string;
constructor(temperatura: number, nombreCiudad: string,) {
        this.temperatura = temperatura;
        this.nombreCiudad = nombreCiudad;
    }
obtenerClima(): any {
        if (this.temperatura < 0) {
            return {temp:"Ciudad Fria"};
        } else if (this.temperatura > 30) {
            return {temp:"Ciudad caliente"}
        } else {
            return {temp:"Ciudad húmeda"}
        }
    }
}
const climas: Clima[] = [
    new Clima(10, "Ciudad de México",),
    new Clima(40, "Bogota"),
    new Clima(-10, "Buenos Aires"),
];

const promedioT = climas.reduce((acumulador, clima) => {
    return acumulador + clima.temperatura;
},  0) / climas.length;


console.log(`Ciudad: ${climas[0].nombreCiudad}`);
console.log(`Clima: ${climas[0].obtenerClima().temp}`);
console.log(`Promedio ${promedioT}`)