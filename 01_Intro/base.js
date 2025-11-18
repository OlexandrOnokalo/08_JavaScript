function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function getDaysInMonth(month, year) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && isLeapYear(year)) return 29;
    return days[month - 1];
}

function task1() {
    const a = +prompt("Завдання 1\nВведіть перше число:");
    const b = +prompt("Завдання 1\nВведіть друге число:");

    if (a > b) alert("Завдання 1:\nБільше число = " + a);
    else if (b > a) alert("Завдання 1:\nБільше число = " + b);
    else alert("Завдання 1:\nЧисла рівні = " + a);
}

function task2() {
    const x = +prompt("Завдання 2\nВведіть перше число:");
    const y = +prompt("Завдання 2\nВведіть друге число:");
    const op = prompt("Завдання 2\nВведіть операцію (+, -, *, /):");

    let res;

    switch (op) {
        case "+": res = x + y; break;
        case "-": res = x - y; break;
        case "*": res = x * y; break;
        case "/":
            if (y === 0) {
                alert("Завдання 2:\nПомилка — ділення на нуль");
                return;
            }
            res = x / y;
            break;
        default:
            alert("Завдання 2:\nНевідома операція");
            return;
    }

    alert(`Завдання 2:\n${x} ${op} ${y} = ${res}`);
}

function task3() {
    const n = +prompt("Завдання 3\nВведіть число:");
    alert("Завдання 3:\nМодуль = " + Math.abs(n));
}

function task4() {
    const year = +prompt("Завдання 4\nВведіть рік:");
    const days = isLeapYear(year) ? 366 : 365;
    alert("Завдання 4:\nКількість днів у році = " + days);
}

function task5() {
    let day = +prompt("Завдання 5\nДень:");
    let month = +prompt("Завдання 5\nМісяць:");
    let year = +prompt("Завдання 5\nРік:");

    const maxDay = getDaysInMonth(month, year);

    if (day < 1 || day > maxDay || month < 1 || month > 12) {
        alert("Завдання 5:\nНекоректна дата");
        return;
    }

    day++;

    if (day > maxDay) {
        day = 1;
        month++;

        if (month > 12) {
            month = 1;
            year++;
        }
    }

    const d = day.toString().padStart(2, "0");
    const m = month.toString().padStart(2, "0");

    alert(`Завдання 5:\nНаступна дата = ${d}.${m}.${year}`);
}

task1();
task2();
task3();
task4();
task5();
