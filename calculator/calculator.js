var number = {};
number.inputs = [];

var cal = function() {
    readInput();
    console.log(number.inputs[0] + number.inputs[1]);
    console.log(number.inputs[0] - number.inputs[1]);
    console.log(number.inputs[0] * number.inputs[1]);
    console.log(number.inputs[0] / number.inputs[1]);
}

var readInput = function() {
    var n1 = document.getElementById('input1');
    var n2 = document.getElementById('input2');
    var num1 = Number(n1.value);
    var num2 = Number(n2.value);
    console.log(num1, num2);
    number.inputs.push(num1, num2);
    console.log(number.inputs);
}