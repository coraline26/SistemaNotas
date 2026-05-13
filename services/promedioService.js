function calcularPromedio(n1, n2, n3) {

    return (n1 + n2 + n3) / 3;
}

function estadoAlumno(promedio) {

    if (promedio >= 13) {
        return "APROBADO";
    }

    return "DESAPROBADO";
}

module.exports = {
    calcularPromedio,
    estadoAlumno
};