// Задача 1 - странный цикл
const b1 = document.querySelector('.btn1');
const out1 = document.querySelector('.out-1');

b1.onclick = () => {
  let out = '';
  for (let i = 0; i <= 10; i++) {
    out += 10 - i + ' ' + i + ' ';
  }
  out1.innerHTML += out;
}
// Задача 2
const b2 = document.querySelector('.btn2');
b2.onclick = () => {
  let out2 = document.querySelector('.out-2');
  for (let i=1; i<4; i++) {
    for (let k=0; k<6; k++) {
      if ( k%2 === 0 ) {
        out2.innerHTML += '1';
      } else {
        out2.innerHTML += '0';
      }
    }
      out2.innerHTML += '<br>';
  }
}
// Задача 3 - цикл до i
const b3 = document.querySelector('.btn-3');
b3.onclick = () => {
  let out3 = document.querySelector('.out-3');
  for (let i=0; i<5; i++) {
    for (let k=0; k<i; k++) {
      out3.innerHTML += '*';
    }
      out3.innerHTML += '<br>';
  }
}
// Задача 4 - сложный цикл
const b4 = document.querySelector('.btn-4');
b4.onclick = () => {
  let out4 = document.querySelector('.out-4');
  for (let i=0; i<5; i++) {
    out4.innerHTML += '<br>';
    for (let k=1; k<11; k++) {
      if ( i*10 + k < 10 ) {
        out4.innerHTML += `0${k} `;
      } else {
        out4.innerHTML += 10*i + k + ' ';
      }
    }
  }
}

// Задача 5 - функция return
const btn5 = document.querySelector('.btn-5');
const out5 = document.querySelector('.out-5');

function t5(year) {
  return 2020 - year;
}
btn5.onclick = () => {
  out5.textContent = t5(1992);
}

//Задача 6 - округление
const btn6 = document.querySelector('.btn-6');
const out6 = document.querySelector('.out-6');

function t6(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
btn6.onclick = () => {
  out6.textContent = t6(5, 8);
}

// Задача 7 - цвет в формате rgb
const btn7 = document.querySelector('.btn-7');
const out7 = document.querySelector('.out-7');

function t7() {
  return `rgb(${t6(0,255)}, ${t6(0,255)}, ${t6(0,255)})`;
}

btn7.onclick = () => {
  out7.textContent = t7();
}

// Задача 8 - ёлочка
let out8 = document.querySelector('.out-8');
const btn8 = document.querySelector('.btn-8');
let p = 0;
let outStr8 = '';
let flag = 3;

btn8.onclick = () => {
   while (p < 4 ) {
    let p1 = 0;
    while ( p1 < 4 ) {
      if ( p1 < flag ) {
        outStr8 += '&nbsp';
      }
      else {
        outStr8 += '*';
      }
      p1++;
    }
    flag--;
    outStr8 += '<br>';
    p++;
  }
  out8.innerHTML = outStr8; 
}
// Задача 9 - вывести все цифра от 1 до 50 с помощью цикла while
let out9 = document.querySelector('.out-9');
const b9 = document.querySelector('.btn-9');
p = 1;
let outStr9 = '';

b9.onclick = () => {
  while ( p <= 50 ) {
    outStr9 += `${p} `;
    p++;
  }
  out9.innerHTML = outStr9;
}

//Задача 10 - обратный цикл
let out10 = document.querySelector('.out-10');
const btn10 = document.querySelector('.btn-10');

let outStr10 = '';
let i10 = document.querySelector('.i-10');

btn10.onclick = () => {
  let num10 = i10.value;
  let p = num10;
   while (p >= 0 ) {
      outStr10 += `${p} `;
      p--;
  }
  out10.innerHTML = outStr10; 
}