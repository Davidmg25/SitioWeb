function hola()
{
    alert("Hola mundo");
    console.log('Hola mundo');
    fun1()
}

var global = 100;
function fun1()
{
    var local_uno = 1
    alert("Global" + global + " Local " + local_uno);
    fun2();
}

function fun2()
{ 
    var local_dos = 2
    alert("Global" + global + " Local " + local_dos);
}

function valor()
{
    var nombre;
    nombre = prompt('Ingresa tu nombre', '');
    alert('Hola ' + nombre)
}

function calculaIMC(n1, n2)
{
    var num1 = n1;
    var num2 = n2;

    var result = parseInt(num2) / parseInt(num1) ** 2;

    alert('Su IMC es de: '+ result)
}

function sum(n1, n2)
{
    var num1 = n1;
    var num2 = n2;

    var result = parseInt(num1) + parseInt(num2);

    alert('El resultado de la suma es: '+ result)
}

function res(n1, n2)
{
    var num1 = n1;
    var num2 = n2;

    var result = parseInt(num1) - parseInt(num2);

    alert('El resultado de la resta es: '+ result)
}

function mul(n1, n2)
{
    var num1 = n1;
    var num2 = n2;

    var result = parseInt(num1) * parseInt(num2);

    alert('El resultado de la multiplicación es: '+ result)
}

function div(n1, n2)
{
    var num1 = n1;
    var num2 = n2;

    if(num2 == 0)
    {   
        alert('No se puede dividir por 0 :c');
    }else{
        var result = parseInt(num1) / parseInt(num2);

        alert('El resultado de la división es: '+ result)
    }
    
}
