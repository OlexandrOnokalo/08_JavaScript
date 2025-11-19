
const arrayLength = 20;
const array = [];

function task1(){
    console.log("Завдання 1");
    for (let i = 0; i < arrayLength; i++) {
        array.push(Math.floor(Math.random() * 101));
    }
    console.log(array);

}

function task2(){
    console.log("Завдання 2");

}

task1();


// function task1() {
//     const a = +prompt("Завдання 1\nВведіть перше число:");
//     const b = +prompt("Завдання 1\nВведіть друге число:");

//     if (a > b) alert("Завдання 1:\nБільше число = " + a);
//     else if (b > a) alert("Завдання 1:\nБільше число = " + b);
//     else alert("Завдання 1:\nЧисла рівні = " + a);
// }

// function task2() {
//     const x = +prompt("Завдання 2\nВведіть перше число:");
//     const y = +prompt("Завдання 2\nВведіть друге число:");
//     const op = prompt("Завдання 2\nВведіть операцію (+, -, *, /):");

//     let res;

//     switch (op) {
//         case "+": res = x + y; break;
//         case "-": res = x - y; break;
//         case "*": res = x * y; break;
//         case "/":
//             if (y === 0) {
//                 alert("Завдання 2:\nПомилка — ділення на нуль");
//                 return;
//             }
//             res = x / y;
//             break;
//         default:
//             alert("Завдання 2:\nНевідома операція");
//             return;
//     }

//     alert(`Завдання 2:\n${x} ${op} ${y} = ${res}`);
// }

// function task3() {
//     const n = +prompt("Завдання 3\nВведіть число:");
//     alert("Завдання 3:\nМодуль = " + Math.abs(n));
// }

// function task4() {
//     const year = +prompt("Завдання 4\nВведіть рік:");
//     const days = isLeapYear(year) ? 366 : 365;
//     alert("Завдання 4:\nКількість днів у році = " + days);
// }

// function isLeapYear(year) {
//     return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
// }

// function getDaysInMonth(month, year) {
//     const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     if (month === 2 && isLeapYear(year)) return 29;
//     return days[month - 1];
// }

// function task5() {
//     let day = +prompt("Завдання 5\nДень:");
//     let month = +prompt("Завдання 5\nМісяць:");
//     let year = +prompt("Завдання 5\nРік:");

//     const maxDay = getDaysInMonth(month, year);

//     if (day < 1 || day > maxDay || month < 1 || month > 12) {
//         alert("Завдання 5:\nНекоректна дата");
//         return;
//     }

//     day++;

//     if (day > maxDay) {
//         day = 1;
//         month++;

//         if (month > 12) {
//             month = 1;
//             year++;
//         }
//     }

//     const d = day.toString().padStart(2, "0");
//     const m = month.toString().padStart(2, "0");

//     alert(`Завдання 5:\nНаступна дата = ${d}.${m}.${year}`);
// }


// function task6() {
//     const birthYear = +prompt("Завдання 1.1\nВведіть рік вашого народження:");
//     const age = 2025 - birthYear;
//     alert("Завдання 1.1:\nВаш вік: " + age);
// }


// function task7() {
//     const sizeGb = +prompt("Завдання 1.2\nВкажіть обсяг флешки (ГБ):");
//     const sizeMb = sizeGb * 1024;
//     const fileSizeMb = 820;
//     const count = Math.floor(sizeMb / fileSizeMb);
//     alert("Завдання 1.2:\nНа флешку поміститься файлів: " + count);
// }


// // switch бо є багато фіксованих варіантів відповідності цифри до символу
// function task8() {
//     const digit = prompt("Завдання 2.1\nВведіть число від 0 до 9:");
//     let symbol;

//     switch (digit) {
//         case "0": symbol = ")"; break;
//         case "1": symbol = "!"; break;
//         case "2": symbol = "@"; break;
//         case "3": symbol = "#"; break;
//         case "4": symbol = "$"; break;
//         case "5": symbol = "%"; break;
//         case "6": symbol = "^"; break;
//         case "7": symbol = "&"; break;
//         case "8": symbol = "*"; break;
//         case "9": symbol = "(" ; break;
//         default:
//             alert("Завдання 2.1:\nПотрібно ввести цифру 0-9");
//             return;
//     }

//     alert("Завдання 2.1:\nСпецсимвол: " + symbol);
// }


// //  if, бо є послідовна перевірка складної логічної умови
// function task9() {
//     const year = +prompt("Завдання 2.2\nВведіть рік:");
//     if (isLeapYear(year)) {
//         alert("Завдання 2.2:\nРік " + year + " є високосним");
//     } else {
//         alert("Завдання 2.2:\nРік " + year + " не є високосним");
//     }
// }


// // if бо треба послідовно перевіряти день місяць і можливий перехід року
// function task10() {
//     let day = +prompt("Завдання 2.3\nДень:");
//     let month = +prompt("Завдання 2.3\nМісяць:");
//     let year = +prompt("Завдання 2.3\nРік:");

//     const maxDay = getDaysInMonth(month, year);

//     if (day < 1 || day > maxDay || month < 1 || month > 12) {
//         alert("Завдання 2.3:\nНекоректна дата");
//         return;
//     }

//     day++;

//     if (day > maxDay) {
//         day = 1;
//         month++;
//         if (month > 12) {
//             month = 1;
//             year++;
//         }
//     }


//     alert(`Завдання 2.3:\nНаступна дата = ${day}.${month}.${year}`);
// }


// // for бо відома кількість ітерацій від початку до кінця діапазону
// function task11() {
//     let start = +prompt("Завдання 3.1\nПочаток діапазону:");
//     let end = +prompt("Завдання 3.1\nКінець діапазону:");

//     if (start > end) {
//         const temp = start;
//         start = end;
//         end = temp;
//     }

//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//         sum += i;
//     }

//     alert("Завдання 3.1:\nСума = " + sum);
// }


// //  while бо зручно ділити число на 10, поки воно не стане 0
// function task12() {
//     let n = +prompt("Завдання 3.2\nВведіть число:");
//     n = Math.abs(n);

//     if (n === 0) {
//         alert("Завдання 3.2:\nКількість цифр = 1");
//         return;
//     }

//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }

//     alert("Завдання 3.2:\nКількість цифр = " + count);
// }


// // for, бо  потрібно 10 введень
// function task13() {
//     let positive = 0;
//     let negative = 0;
//     let zeros = 0;
//     let even = 0;
//     let odd = 0;

//     for (let i = 0; i < 10; i++) {
//         const num = +prompt("Завдання 3.3\nВведіть число (" + (i + 1) + " з 10):");

//         if (num > 0) positive++;
//         else if (num < 0) negative++;
//         else zeros++;

//         if (num % 2 === 0) even++;
//         else odd++;
//     }

//     alert(
//         "Завдання 3.3:\n" +
//         "Позитивних: " + positive + "\n" +
//         "Негативних: " + negative + "\n" +
//         "Нулів: " + zeros + "\n" +
//         "Парних: " + even + "\n" +
//         "Непарних: " + odd
//     );
// }


// //  do...while бо хоча б один раз треба показати день і потім питати, чи продовжувати.
// function task14() {
//     const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
//     let index = 0;
//     let answer;

//     do {
//         alert("Завдання 3.4:\nДень тижня: " + days[index]);
//         index = (index + 1) % days.length;
//         answer = confirm("Хочете побачити наступний день?");
//     } while (answer);
// }


// function factorial(n) {
//     if (n <= 1) return 1;
//     return n * factorial(n - 1);
// }

// function makeNumberFromDigits(a, b, c) {
//     return a * 100 + b * 10 + c;
// }

// function rectangleArea(a, b) {
//     if (b === undefined) return a * a;
//     return a * b;
// }




// function reverseNumber(n) {
//     const sign = n < 0 ? -1 : 1;
//     const s = String(Math.abs(n));

//     function helper(str) {
//         if (str.length <= 1) return str;
//         return str[str.length - 1] + helper(str.slice(0, -1));
//     }

//     const reversedStr = helper(s);
//     return sign * Number(reversedStr);
// }


// function sumDigits(n) {
//     n = Math.abs(n);
//     if (n < 10) return n;
//     return (n % 10) + sumDigits(Math.floor(n / 10));
// }


// function task15() {
//     const n = +prompt("Завдання 4.1\nВведіть число для факторіала:");
//     const res = factorial(n);
//     alert("Завдання 4.1:\nФакторіал = " + res);
// }


// function task16() {
//     const a = +prompt("Завдання 4.2\nПерша цифра:");
//     const b = +prompt("Завдання 4.2\nДруга цифра:");
//     const c = +prompt("Завдання 4.2\nТретя цифра:");
//     const num = makeNumberFromDigits(a, b, c);
//     alert("Завдання 4.2:\nЧисло = " + num);
// }


// function task17() {
//     const a = +prompt("Завдання 4.3\nДовжина:");
//     const bStr = prompt("Завдання 4.3\nШирина (можна залишити порожнім):");
//     const b = bStr === "" || bStr === null ? undefined : +bStr;

//     const area = rectangleArea(a, b);
//     alert("Завдання 4.3:\nПлоща = " + area);
// }

// function formatTime(hours, minutes, seconds) {
//     if (minutes === undefined) minutes = 0;
//     if (seconds === undefined) seconds = 0;

//     const hh = String(hours).padStart(2, "0");
//     const mm = String(minutes).padStart(2, "0");
//     const ss = String(seconds).padStart(2, "0");

//     return hh + ":" + mm + ":" + ss;
// }

// function task18() {
//     const h = +prompt("Завдання 4.4\nГодини:");
//     const mStr = prompt("Завдання 4.4\nХвилини (можна пропустити):");
//     const sStr = prompt("Завдання 4.4\nСекунди (можна пропустити):");

//     const m = mStr === "" || mStr === null ? undefined : +mStr;
//     const s = sStr === "" || sStr === null ? undefined : +sStr;

//     const time = formatTime(h, m, s);
//     alert("Завдання 4.4:\nЧас: " + time);
// }


// function task19() {
//     const n = +prompt("Завдання 4.5\nВведіть число:");
//     const rev = reverseNumber(n);
//     alert("Завдання 4.5:\nЧисло задом наперед = " + rev);
// }


// function task20() {
//     const n = +prompt("Завдання 4.6\nВведіть число:");
//     const sum = sumDigits(n);
//     alert("Завдання 4.6:\nСума цифр = " + sum);
// }


// task1();
// task2();
// task3();
// task4();
// task5();
// task6();
// task7();
// task8();
// task9();
// task10();
// task11();
// task12();
// task13();
// task14();
// task15();
// task16();
// task17();
// task18();
// task19();
// task20();
