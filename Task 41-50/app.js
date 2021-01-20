// Задача 1 - выведете последний элемент Массива
const b1 = document.querySelector('.b-1');
const out1 = document.querySelector('.out-1');
ar1 = [100, 200, 300, 400, 700, 121];
b1.onclick = () => {
  out = '';
  const lastItem = ar1[ar1.length - 1];
  out += lastItem;
  out1.innerHTML = out;
}
// Задача 2 - выводим элементы из input в конец массива без push
function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += arr[i] + ' ';
    }
    document.querySelector(domElem).innerHTML = out;
}

const b2 = document.querySelector('.b-2');
const inp2 = document.querySelector('.i-2');
ar2 = [33,'best', 66, 'best'];
b2.onclick = () => {
  let inpValue = inp2.value;
  let newElement = inpValue;
  let newLastElement = ar2[ar2.length];
  ar2[ar2.length] = newElement;
  showArr('.out-2', ar2);
}

// Задача 3 - проверить индекс вводимого элемента с помощью функции indexOf
const b3 = document.querySelector('.b-3');
const inp3 = document.querySelector('.i-3');
ar3 = [2,3,4,5,6,7];
b3.onclick = () => {
  let inpValue = +inp3.value;
  let id3 = ar3.indexOf(inpValue);
  let out3 = '';
    for (let i = 0; i < ar3.length; i++) {
        out3 = id3;
    }
    document.querySelector('.out-3').innerHTML = out3;
}
// Задача 4 - наполнить массив единицами
const b4 = document.querySelector('.b-4');
const inp4 = document.querySelector('.i-4');
ar4 = [];
b4.onclick = () => {
  let inpValue = +inp4.value;
  out4 = '';
  for (let i=0; i<inpValue; i++) {
    ar4.push(1);
    out4 = ar4;
  }
  document.querySelector('.out-4').innerHTML = out4;
}
// Задача 5 - проверяем, есть элемент в массиве
const b5 = document.querySelector('.b-5');
const inp5 = document.querySelector('.i-5');
ar5 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
b5.onclick = () => {
  let inpValue5 = +inp5.value;
  if(ar5.indexOf(+inpValue5) != -1){
    console.log('Есть элемент в массиве');
  } else{
    ar5.push(+inpValue5);
    showArr('.out-5', ar5);
  }
}
// Задача 6 - метод concat
const b6 = document.querySelector('.b-6');
const inp6 = document.querySelector('.i-6');
let ar61 = [5,6,7,8,9];
let ar62 = [23,24,56,87];
b6.onclick = () => {
  let ar6 = ar61.concat(ar62);
  showArr('.out-6', ar6);
}
// Задача 7 - метод includes
const b7 = document.querySelector('.b-7');
const inp7 = document.querySelector('.i-7');
ar7 = ['b', 'c', '45', 'e', 'z', 'y'];
b7.onclick = () => {
  let inpValue7 = inp7.value;
  if(ar7.includes(inpValue7)){
    console.log('Есть элемент в массиве');
  } else{
    ar7.push(inpValue7);
    showArr('.out-7', ar7);
  }
}
// Задача 8 - найти самую длинную строчку в массиве
const b8 = document.querySelector('.b-8');
const inp8 = document.querySelector('.i-8');
ar8 = ['Your','payment','method','will','automatically','be','charged','in','advance','every' ];
b8.onclick = () => {
    ln = ar8.reduce((r,s) => r > s.length ? r : s.length, 0);
    const result = ar8.filter(pl => pl.length == ln);
    showArr('.out-8', result);
}
// Задача 9 - вывести элементы массива в одну строку
const b9 = document.querySelector('.b-9');
const inp9 = document.querySelector('.i-9');
ar9 = [4,5,6,7,8,9,10];
b9.onclick = () => {
  let arr9 = ar9.join('');
  showArr('.out-9', arr9);
}

// Задача 10 - вывод значения двумерного массива
const b10 = document.querySelector('.b-10');
let a10 = [12, [45, 87], [55, 13]];

b10.onclick = () => {
  document.querySelector('.out-10').innerHTML += a10[2][0];
  return a10[2][0];
}





