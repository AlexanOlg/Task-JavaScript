// Задачи 1 и 2 - запись новых тегов внутрь div
const three = document.querySelector('.three').innerHTML = `<h3>Lorem</h3>`;
const four = document.querySelector('.four').innerHTML += `<h4>Lorem</h4>` + `<p>Lorem</p>`;

// Задача 3 - вывод в консоль значений классов
let divS3 = document.querySelector('.s3').innerHTML;
console.log(divS3); //s3
divS3 = document.querySelector('.s4').innerHTML;
console.log(divS3); //s4

//Задача 4 - запись результата деления в div
let c = 7;
d = 2;
document.querySelector(`.out-2`).textContent = c * d;
// innerHTML анализирует содержимое как HTML, поэтому это занимает больше времени.
// nodeValue использует прямой текст, не разбирает HTML и работает быстрее.
// textContent использует прямой текст, не разбирает HTML и работает быстрее.
// innerText учитывает стили. Например, он не будет получать скрытый текст.

// Задача 5
let input5 = document.querySelector(`.input5`);
let button5 = document.querySelector('.button5');

button5.onclick = function t8() {
    console.log(input5.value);
}

// Задача 6 - по клику по кнопке изменить value input
let button6 = document.querySelector('.button6');

button6.onclick = () => {
  document.querySelector(`.input6`).value ='yello';
}

// Задача 7 - parseIntвозвращает целое число,
// а parseFloat возвращает число с плавающей точкой:
const button7 = document.querySelector('.button7');
const out7 = document.querySelector('.out-7');

button7.onclick = () => {
  const t = document.querySelector('.input7').value;
  out7.innerHTML = parseInt(t);
  //out7.innerHTML = parseFloat(t);
}

// Задача 8 - сложение отрицательных чисел
const button8 = document.querySelector('.button8');
const out8 = document.querySelector('.out-8');

button8.onclick = () => {
  const t = document.querySelector('.input8_1').value;
  const k = document.querySelector('.input8_2').value;
  out8.innerHTML = parseInt(t) + parseInt(k);
}

// Задача 9 - Возведение в степень
const input91 = document.querySelector('.input9_1');
const input92 = document.querySelector('.input9_2');
const button9 = document.querySelector('.button9');
const out9 = document.querySelector('.out-9');

button9.onclick = () => {
  let num1 = +input91.value;
  let num2 = +input92.value;
  out9.innerHTML = num1 ** num2;
}

// Задача 10 - сбор значений из select
const inp101 = document.querySelector('.input10_1');
const inp102 = document.querySelector('.input10_2');
const s10 = document.querySelector('.s-10');
const out10 = document.querySelector('.out-10');
const button10 = document.querySelector('.button10');

button10.onclick = () => {
  num1 = +inp101.value;
  num2 = +inp102.value;
  num3 = s10.value;
  if (num3 === '*') {
    out10.innerHTML = num1 * num2;
  } else if ( num3 === '+') {
    out10.innerHTML = num1 + num2;
  } else if ( num3 ==='-') {
    out10.innerHTML = num1 - num2;
  } else {
    out10.innerHTML = num1 / num2;
  }
}
