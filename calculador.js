const txtOp1 = document.getElementById('op1')
const txtOperacion = document.getElementById('operacion')
const txtOp2 = document.getElementById('op2')
const btnCalcular = document.getElementById('calcular')
const pResultado = document.getElementById('resultado')

btnCalcular.addEventListener('click', calcular)//para que el boton funcione


function calcular() {
    const operacion = txtOperacion.value
    //parseFloat = para cambiarlos para numeros con decimales
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if ((operacion == '+' || operacion == '-' ||
        operacion == '*' || operacion == '/' ) && !isNaN(op1) && !isNaN(op2) ) {
        //isNaN= no es un numero 
        let resultado;
        switch (operacion) {
            case '+':
                resultado = op1 + op2
                break;
            case '-':
                resultado = op1 - op2
                break;
            case '*':
                resultado = op1 * op2
                break;
            case '/':
                resultado = op1 / op2
                break;
            //break = se usa para evitar que todas las operaciones se ejecuten al mismo tiempo
        }
        pResultado.style = 'color:black'
        pResultado.innerText = '=' + resultado //valor declarado.innerText = 'texto qualquer' *esto se usa para mostrar el texto en la web y no en la consola
    } else {
        pResultado.style = 'color:red'
        pResultado.innerText = 'calculo imposible'
    }

}


