console.log("Esta calculadora lo que hace es pedirte dos numeros y darte la suma, resta, multiplicación y division");
console.log("Script conectado");

function dataSave() {
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value

    return [parseFloat(a), parseFloat(b)]
}

function suma() {
    const [a, b] = dataSave()
    return alert(a+b)
 
}

function resta() {
    const [a, b] = dataSave()
    return alert(a-b)
}

function multiplicacion() {
    const [a, b] = dataSave()
    return alert(a*b)
}

function division() {
    const [a, b] = dataSave()
    return alert(a/b)
}


