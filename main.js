var valor1 = Number('');
var valor2 = Number('');
var ope2 = false;
var operador = '';
var total = Number('');
var historial ='';

function ValorBoton( valor) 
{
    if(ope2)
    {
        valor2 += valor;
        console.log(valor2);
        document.getElementById('visorid').innerHTML+=valor;
    }
    else
    {
        valor1 += valor;
        console.log(valor1);
        document.getElementById('visorid').innerHTML+=valor;
    }
    
}
function recibirOperador(operador1)
{
    ope2 = true;
    operador = operador1;
    document.getElementById('visorid').innerHTML+=operador;
    
}
function limpiar()
{
    total = 0;
    valor1 = Number(null);
    valor2= Number(null);
    ope2 = false;
    document.getElementById('visorid').innerHTML='';
    console.log(0);
}
function calcular()
{
    var a = Number(valor1);
    var b = Number(valor2)
    switch(operador)
    {
        case '+': total = a + b;
        break;
        case '-': total = a - b;
        break;
        case '*': total = a * b;
        break;
        case '/': total = a / b;
        break;
    }
    ope2 = false;
    document.getElementById('visorid').innerHTML=total;
    historial += valor1 +' '+ operador + ' ' + valor2 + ' ' + '=' + total+ '\n <br>';
    console.log(total)
    console.log(historial)
    document.getElementById('hist').innerHTML=historial;
    valor1 = total;
    valor2 = 0;

}

