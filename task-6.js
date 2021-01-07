// Написати програму де користувач вводить 3 числа, після вводу всіх
// трьох чисел йому на екрані показується найбільше з них. Додатково
// перевіряти чи це взагалі числа

let number1 = +prompt("Введите первое число", " ");
if (!isNaN(number1)) {
  let number2 = +prompt("Введите второе число", " ");
  if (!isNaN(number2)) {
    let number3 = +prompt("Введите третье число", " ");
    if (!isNaN(number3)) {
      let result = Math.max(number1, number2, number3);
      alert(result);
    }
  }
}
