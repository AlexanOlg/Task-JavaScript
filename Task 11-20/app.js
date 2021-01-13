// Задача 1 - используем свойство length
const i1 = document.querySelector('.input1');
const b1 = document.querySelector('.button1');
const out11 = document.querySelector('.out-1_1');
const out12 = document.querySelector('.out-1_2');

b1.onclick = () => {
  let value1 = i1.value;
  out11.innerHTML = value1;
  if ( value1.length < 6 ) {
    out12.innerHTML = 0;
  } else {
    out12.innerHTML = 1;
  }
}

// Задача 2 - создание элементов внутри div и событий на созданные элементы
const out2 = document.querySelector('.out-2');
const b2 = document.querySelector('.button2');

b2.onclick = () => {
  const num = out2.innerHTML += `<input class='input2'/><button class='button2_1'></button><div class='out2_1'></div>`;
  const i2 = document.querySelector('.input2');
  const b21 = document.querySelector('.button2_1');
  const out21 = document.querySelector('.out2_1');

  b21.onclick = function f2() {
    let a = i2.value;
    out21.innerHTML = a;
  }
}

//Задача 3 - поменять местами цвета input
const b3 = document.querySelector(".button3");

b3.onclick = () => {
  let i31 = document.querySelector(".input3_1").value;
  document.querySelector(".input3_2").value = i31;
}

// Задача 4 - изменять значение слайдера при движении полунка
function f4() {
  let i4 = document.querySelector(".input4").value;
  document.querySelector(".out-4").textContent = i4;
}
document.querySelector(".input4").oninput = f4;

// Задача 5 - вывести в input значение выбранного select
const i5 = document.querySelector('.input5');
const s5 = document.querySelector('.s-5');

s5.onchange = () => {
  let num1 = s5.value;
  i5.value = num1;
}

// Задача 6 - вывести все четные числа
const b6 = document.querySelector('.button6');
const out6 = document.querySelector('.out-6');
b6.onclick = () => {
  let out = '';
  for (let i=25; i<123; i++) {
    if ( i % 2 === 0) {
      out += i + ' ';
    } 
  }
  out6.innerHTML = out;
}

// Задача 7 - Цикл в цикле
const b7 = document.querySelector('.button7');
const out7 = document.querySelector('.out-7');
const i7 = document.querySelector('.input7');

b7.onclick = () => {
  let j = i7.value;
  for (let i=0; i<j; i++) {
    for (let k=0; k<7; k++) {
      out7.innerHTML += "*";
    }
    out7.innerHTML += "<br>";
  }
}
// Задача 8 - выхватить содержимое всех div на странице
const b8 = document.querySelector('.button8');
const out8 = document.querySelector('.out-8');

b8.onclick = () => {
  let div8 = document.querySelectorAll('.div-8');
  let out = '';
  for (let i=0; i<div8.length; i++) {
    out += div8[i].innerHTML + ' ';
  }
  out8.innerHTML += out;
}
// Задача 9 - внести значения в каждый из input
document.querySelector('.button9').onclick = () => {
  let i9 = document.querySelectorAll('.i-9');
  for (let i=0; i<i9.length; i++) {
    i9[i].value += i+1;
  }
}

// Задача 10 
const b10 = document.querySelector('.button10');
const out10 = document.querySelector('.out-10');

b10.onclick = () => {
  let i10 = document.querySelectorAll('.i-10');
  let out = '';
  for (let i=0; i<i10.length; i++) {
    if (i10[i].checked) {
      out += i10[i].value;
    }
  }
  out10.innerHTML = out;
}
