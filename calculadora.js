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
