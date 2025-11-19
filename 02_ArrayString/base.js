const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);

console.log("Початковий масив:", array.join(", "));

console.log("Завдання 2:");
array.forEach((value, index) => {
    console.log(`[${index + 1}] – ${value}`);
});

const hasMultipleOfSeven = array.some(num => num % 7 === 0);
console.log("Завдання 3: є кратне 7?", hasMultipleOfSeven);

array.sort((a, b) => b - a);
console.log("Завдання 4: сортування за спаданням:", array.join(", "));

array.fill(0, array.length / 2);
console.log("Завдання 5: друга половина = 0:", array.join(", "));

array.splice(0, 3);
console.log("Завдання 6: без перших трьох:", array.join(", "));

const hasDuplicates = new Set(array).size !== array.length;
console.log("Завдання 7: є однакові елементи?", hasDuplicates);

const withoutEdges = array.slice(1, -1);
console.log("Завдання 8: без крайніх:", withoutEdges.join(", "));

const evenCount = array.filter(num => num % 2 === 0).length;
console.log("Завдання 9: кількість парних:", evenCount);

function countSpaces(str) {
    return str.split("").filter(ch => ch === " ").length;
}

function capitalizeFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function countWords(str) {
    const trimmed = str.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
}

function makeAbbreviation(phrase) {
    return phrase
        .trim()
        .split(/\s+/)
        .map(word => word[0])
        .join("")
        .toUpperCase();
}

function isPalindrome(str) {
    const normalized = str.toLowerCase().replace(/\s+/g, "");
    const reversed = normalized.split("").reverse().join("");
    return normalized === reversed;
}

console.log("String task 1:", countSpaces("a b  c   d"));
console.log("String task 2:", capitalizeFirst("hello world"));
console.log("String task 3:", countWords("  це   приклад   рядка  "));
console.log("String task 4:", makeAbbreviation("cascading style sheets"));
console.log("String task 5:", isPalindrome("А роза упала на лапу Азора"));
