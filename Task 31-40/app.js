// Задача 1 - решить двумя разными способами
let out1 = document.querySelector('.out-1');
const b1 = document.querySelector('.b-1');
const i110 = document.querySelector('.i-1_1');
const i112 = document.querySelector('.i-1_2');
let outStr1 = '';

// b1.onclick = () => {
//   let num11 = i110.value;
//   let num12 = i112.value;
//   if ( num11 > num12 ) {
//     for(i=num12; i <= num11; i++) {
//       outStr1 += `${i} `;
//     }
//   } else {
//     for (i=num11; i <= num12; i++) {
//       outStr1 += `${i} `;
//     }
//   }
//   out1.innerHTML = outStr1;
// }

b1.onclick = () => {
  let num11 = i110.value;
  let num12 = i112.value;
  if ( num11 > num12 ) {
    let p = num12;
    while (p <= num11 ) {
      outStr1 += `${p} `;
      p++;
    }
  } else {
    let p = num11;
    while (p <= num12 ) {
      outStr1 +=`${p} `;
      p++;
    }
  }
  out1.innerHTML = outStr1;
}

// Задача 2 - вывести все четные годы от 1950 до 2000 включительно
let out2 = document.querySelector('.out-2');
const b2 = document.querySelector('.b-2');
let outStr2 = '';

b2.onclick = () => {
  p = 1950;
  while ( p <= 2000 ) {
    if ( p % 2 === 0 ) {
      outStr2 +=`${p} `;
    }
    p++;
  }
  out2.innerHTML = outStr2;
}

// Задача 3 - перебрать и вывести все элементы div на странице
const b3 = document.querySelector('.b-3');
const out3 = document.querySelector('.out-3');

b3.onclick = () => {
  let div3 = document.querySelectorAll('.div-3');
  let out = '';
  let p = 0;
  while ( p < div3.length ) {
    out += div3[p].innerHTML + ' ';
    p++;
  }
  out3.innerHTML += out;
}
// Задача 4 - придать значение input
const b4 = document.querySelector('.b-4');
const out4 = document.querySelector('.out-4');

b4.onclick = () => {
  let i4 = document.querySelectorAll('.i-4');
  let p = 0;
  while ( p < i4.length ) {
    i4[p].value = p + 1;
    p++;
  }
}

// Задача 5 - с проверкой checked
const b5 = document.querySelector('.b-5');
const out5 = document.querySelector('.out-5');

b5.onclick = () => {
  let out = '';
  let i5 = document.querySelectorAll('.i-5');
  let p = 0;
  while ( p < i5.length ) {
    if ( i5[p].checked ) {
      out += i5[p].value;
    }
    p++;
  }
  out5.innerHTML += out;
}

// Задача 6 (аналогична задаче 1(task 21-30) только с циклом while)
const b6 = document.querySelector('.b-6');
const out6 = document.querySelector('.out-6');

b6.onclick = () => {
  let out = '';
  let p = 0;
  while ( p <= 10 ) {
    out += `${10-p} ${p} `;
    p++;
  }
  out6.innerHTML += out;
}

// Задача 7 - проверить наличие класса у элемента
const out7 = document.querySelector('.out-7');
const b7 = document.querySelector('.b-7');

b7.onclick = () => {
    if ( out6.classList.contains('bg-6')) {
      out7.innerHTML = true;
    } else {
      out7.innerHTML = false;
    }
}
// Задача 8 - вывести сумму всех элементов с заданным классом на странице
const out8 = document.querySelector('.out-8');
const b8 = document.querySelector('.b-8');

b8.onclick = () => {
  let p8 = document.getElementsByClassName('p-8').length;
  out8.innerHTML += p8;
}
// Задача 9 - всем классам дать дополнительный класс
const b9 = document.querySelector('.b-9');
b9.onclick = () => {
  let out9 = document.querySelectorAll('.out-9');
  for (let i = 0; i < out9.length; i++) {
    out9[i].classList.add('bg-9');
  }
}

// Задача 10 - добавить новый класс всем элементам на странице с заданным классом
const out10 = document.querySelectorAll('.out-10');
for (let i = 0; i < out10.length; i++ ) {
  out10[i].onclick = () => {
    out10[i].classList.add('bg-10');
  }
}