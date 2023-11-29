const botones = document.querySelectorAll('.calculadora-boton')

const muestra = document.getElementById('muestra')
let operacionElegida;
let valor1 = "";
let valor2 = "";

botones.forEach((boton) => {
    boton.addEventListener('click', () => {
        const valor = boton.value
        if (boton.className !== 'calculadora-boton boton-operacion') {
            if (!operacionElegida) {
                valor1 += valor
                muestra.innerHTML = valor1
            } else {
                valor2 += valor
                muestra.innerHTML = valor2
            }
        } else {
            if (valor === ".") {
                if (!operacionElegida) {
                    valor1 += valor
                    muestra.innerHTML = valor1
                } else {
                    valor2 += valor
                    muestra.innerHTML = valor2
                }
            } else {
                operacionElegida = valor
            }
        }
    })
})


const calcular = () => {
    valor1 = parseFloat(valor1)
    valor2 = parseFloat(valor2)
    let resultado;

    switch (operacionElegida) {
        case '+':
            resultado = valor1 + valor2
            break;
        case '-':
            resultado = valor1 - valor2
            break;
        case '*':
            resultado = valor1 * valor2
            break;
        case '/':
            resultado = valor1 / valor2
            break;
        default:
            return alert('Selecciona una operacion')
            break;
    }
    muestra.innerHTML = resultado
    valor1 = resultado
    operacionElegida = null
    valor2 = ""
}