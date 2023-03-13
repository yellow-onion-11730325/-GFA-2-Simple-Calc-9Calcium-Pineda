function add(){
    let num1_string = document.getElementById("Num1").value;
    let num2_string = document.getElementById("Num2").value;

    num1 = parseFloat(num1_string);
    num2 = parseFloat(num2_string);

    let ans =num1+num2
    document.getElementById("result").innerHTML = "The sum of "+num1_string+" and "+num2_string+" is "+ans;
}

function minus(){
    let num1_string = document.getElementById("Num1").value;
    let num2_string = document.getElementById("Num2").value;

    num1 = parseFloat(num1_string);
    num2 = parseFloat(num2_string);

    let ans = num1-num2;
    document.getElementById("result").innerHTML = "The difference of "+num1+" and "+num2+" is "+ans
}

function times(){
    let num1_string = document.getElementById("Num1").value;
    let num2_string = document.getElementById("Num2").value;

    num1 = parseFloat(num1_string);
    num2 = parseFloat(num2_string);

    let ans = num1*num2;
    document.getElementById("result").innerHTML = "The product of "+num1+" and "+num2+" is "+ans
}

function divide(){
    let num1_string = document.getElementById("Num1").value;
    let num2_string = document.getElementById("Num2").value;

    num1 = parseFloat(num1_string);
    num2 = parseFloat(num2_string);

    let ans = num1/num2;
    document.getElementById("result").innerHTML = "The quotient of "+num1+" and "+num2+" is "+ans
}

function remainder(){
    let num1_string = document.getElementById("Num1").value;
    let num2_string = document.getElementById("Num2").value;

    num1 = parseFloat(num1_string);
    num2 = parseFloat(num2_string);

    let ans = num1%num2;
    document.getElementById("result").innerHTML = "The remainder of the quotient of "+num1+" and "+num2+" is "+ans
}
//parseFloat came from google result:https://gomakethings.com/how-to-get-the-value-of-an-input-as-a-number-with-vanilla-javascript