// Написати програму яка буде знаходити суму, різницю, добуток,
// частрку двох чисел Користувач вводить 2 числа потім вводить знак
// операції і отримує результат в форматі "Сума чисел a i b =
// результат" (такий шаблон для кожної відповіді)

let number1 = +prompt('Введите первое число', ' ');
let number2 = +prompt('Введите второе число', ' ');
let operand = prompt('Введите знак операции', ' ');
if (operand == '+'){
    let result = number1+number2;
alert(`Сумма чисел ${number1} и ${number2} = ${result}`);
}
if (operand == '-'){
    let result = number1-number2;
alert(`Разность чисел ${number1} и ${number2} = ${result}`);
}
if (operand == '*'){
    let result = number1*number2;
alert(`Произведение чисел ${number1} и ${number2} = ${result}`);
}
if (operand == '/'){
    let result = number1/number2;
alert(`Частное чисел ${number1} и ${number2} = ${result}`);
}

