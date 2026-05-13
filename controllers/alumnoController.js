const alumnos = require("../data/alumnos");

const {
    calcularPromedio,
    estadoAlumno
} = require("../services/promedioService");

function mostrarAlumnos() {

    console.log("===== LISTA DE ALUMNOS =====");

    alumnos.forEach(alumno => {

        let promedio = calcularPromedio(
            alumno.nota1,
            alumno.nota2,
            alumno.nota3
        );

        console.log(`
            ID: ${alumno.id}
            Nombre: ${alumno.nombre}
            Promedio: ${promedio.toFixed(2)}
            Estado: ${estadoAlumno(promedio)}
        `);

    });

}

module.exports = {
    mostrarAlumnos
};