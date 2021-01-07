// Написати гру камінь ножиці папір. Де компютер загадує своє
// значення потім користувач вводить свій варіант і далі ми бачимо
// результат на екпані хто виграв

var value = prompt("Камень? Ножницы? Бумага? ", " ");
var computerValue = Math.random();
if (computerValue < 0.33) {
  computerValue = "камень";
} else if (computerValue <= 0.66) {
  computerValue = "бумага";
} else {
  computerValue = "ножницы";
}
if (value === computerValue) {
  alert(`Ничья! ${value} vs ${computerValue}`);
}
if (value === "камень") {
  if (computerValue === "ножницы") {
    alert(`Вы победили! ${value} vs ${computerValue}`);
  } else if (value === "камень") {
    if (computerValue === "бумага") {
      alert(`Вы проиграли! ${value} vs ${computerValue}`);
    }
  }
}
if (value === "бумага") {
  if (computerValue === "камень") {
    alert(`Вы выиграли! ${value} vs ${computerValue}`);
  } else if (value === "бумага") {
    if (computerValue === "ножницы") {
      alert(`Вы проиграли! ${value} vs ${computerValue}`);
    }
  }
}
if (value === "ножницы") {
  if (computerValue === "камень") {
    alert(`Вы проиграли! ${value} vs ${computerValue}`);
  } else if (value === "ножницы") {
    if (computerValue === "бумага") {
      alert(`Вы выиграли! ${value} vs ${computerValue}`);
    }
  }
}

console.log(computerValue);