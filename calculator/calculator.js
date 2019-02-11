var inputs = [];

var cal = function() {
    readInput();
    var result = document.getElementById('result');
    var str = ""
    if(inputs[2] === '+') {
        str += "더하기 : " + (inputs[0] + inputs[1]) + "<br>";
    } else if(inputs[2] === '-') {
        str += "빼기 : " + (inputs[0] - inputs[1]) + "<br>";
    } else if(inputs[2] === '*') {
        str += "곱하기 : " + (inputs[0] * inputs[1]) + "<br>";
    } else if(inputs[2] === '/') {
        str += "나누기 : " + (inputs[0] / inputs[1]) + "<br>";
    } else {
        alert('잘못 입력되었습니다');
    }
    result.innerHTML = str;
}

var readInput = function() {
    inputs = [];
    var n1 = document.getElementById('input1');
    var n2 = document.getElementById('input2');
    var s0 = document.getElementById('input3');
    var num1 = Number(n1.value);
    var num2 = Number(n2.value);
    var symbol = s0.value;
    console.log(num1, num2, symbol);
    inputs.push(num1, num2, symbol);
    console.log(inputs);
}

