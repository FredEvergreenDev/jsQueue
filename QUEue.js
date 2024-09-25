//Equipo Colas: Itzel, Miguel,Tere, Alfredo, Vero

//Ejercicio de Colores Par/Impar

function dividirCola(colaOriginal) {
    const colaPares = [];
    const colaImpares = [];

    colaOriginal.forEach((color, index) => {
    if (index % 2 === 0) {
        colaPares.push(color);
    } else {
        colaImpares.push(color);
    }
    });

    return { colaPares, colaImpares };
}

  // Ejemplo de uso
const colaColores = ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco'];
const { colaPares, colaImpares } = dividirCola(colaColores);
console.log("Cola pares:", colaPares);
console.log("Cola impares:", colaImpares);
console.log("Todos los colores son: ", colaColores);




// Ejercicio Tickets

function eliminarColados(colaConTickets) {
    const colaInicial = [...colaConTickets]; // Copia la cola original
    const colados = [];
    const colaFinal = [];

    while (colaConTickets.length > 0) {
    const persona = colaConTickets.shift();
    if (persona.tieneTicket) {
        colaFinal.push(persona);
    } else {
        colados.push(persona);
    }
    }

    return { colaInicial, colados, colaFinal };
}

  // Ejemplo de uso, asumiendo que cada elemento de la cola es un objeto con una propiedad 'tieneTicket'
const colaEspera = [
    { nombre: 'Miguel', tieneTicket: true },
    { nombre: 'Alfredo', tieneTicket: false },
    { nombre: 'Ana', tieneTicket: false },
    { nombre: 'Itzel', tieneTicket: true },
    { nombre: 'Vero', tieneTicket: false },
    { nombre: 'Tere', tieneTicket: true },
    // ...
];
const { colaInicial, colados, colaFinal } = eliminarColados(colaEspera);
console.log("Cola inicial:", colaInicial);
console.log("Colados:", colados);
console.log("Cola final:", colaFinal);

const personaConTicket = {
    nombre: 'Ana',
    tieneTicket: true,
    // Otros datos relevantes
};