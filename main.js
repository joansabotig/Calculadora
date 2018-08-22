var  valor1 ='';
var valor2 = '';
var ope2 = false;
var operador = '';
var total = '';
function ValorBoton( valor) 
{
    if(ope2)
    {
        valor2 += valor;
        console.log(valor2);
    }
    else
    {
        valor1 += valor;
        console.log(valor1);
    }
    
}
function recibirOperador(operador1)
{
    ope2 = true;
    operador = operador1;
    
}
function calcular()
{
    ope2 = false;
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
    console.log(total)
    valor1=total;
    valo2 =null;
}

