function calculate(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = "không chia được cho 0";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "nope";
    }

    document.getElementById("result").innerText = `Result: ${result}`;

}