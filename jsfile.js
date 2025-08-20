const numbers = [1, 2, 3, 4, 5];
console.log("первый елемент: ", numbers[0]);
numbers[2]= 100 ;
numbers.push(200);
console.log("Итоговый массив: ", numbers);


let table = [
    ["🍎", "🍌"],
    ["🥕", "🍅"]
];
console.log("Банан: ", table[0] [1]);
table[1] [0] = "🥦";
console.log("Итоговый массив:");
console.log(table);

let student = {
    name: "Пидорасик",
    age: 19
};
console.log(student.name);
student.group= "Js-101";
console.log("Итоговый объект:")
console.log(student)



let arr = [1,2,3,4,5];
console.log(arr[0]);
console.log(arr[arr.length - 1]);
arr[1] = 100;
console.log(arr)
arr.push(999)
console.log(arr)

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8 ,9]
    ];
console.log(matrix[1] [1]);
matrix [2] [2] = 0;
console.log(matrix);


let book = {
    title: "Мгла",
    author: "Стивен Кинг",
    year: 1990
}

console.log(book.title);
book.page = 62;
book.year = 2021;
console.log(book);

let user = {
    name: "Глеб",
    address: {
        city: "Кривой Рог",
        street: "Кропивницкого"
    }
};

console.log(user.address.city);
user.address.street = "Георгия"
console.log(user);

let students = [
    { name: "Жора", age: 17 },
    {name: "Дима", age: 20 },
    {name: "Леша", age: 18 }
];

for (let student of students) {
    console.log(student.name);
}

students[1].age += 1;
console.log(students[1]);

let num = 8;
if (num > 0) {
    console.log("Положительное");
} else if (num < 0) {
    console.log("Отрицательное");
} else {
    console.log("Ноль")
}

let command = "start";

switch (command) {
    case "start":
        console.log("Пуск");
        break;
    case "stop":
        console.log("Остановка");
        break;
    case "pause":
        console.log("Пауза");
        break;
      default:
        console.log("Неизвестная команда");
}


let products = [
    { name: "Мышь", price: 50 },
    { name: "Клавиатура", price: 150 },
    { name: "Наушники", price: 80 },
    { name: "Коврик для миши", price: 300 }
];


console.log("Товары дешевле 100:");
for (let product of products) {
    if (product.price < 100) {
        console.log(`${product.name}: ${product.price});
    }
}


let hasiPhone = false;
for (let product of products) {
    if (product.name === "iPhone") {
        hasiPhone = true;
        break;
    }
}

if (!hasiPhone) {
    products.push({ name: "iPhone", price: 999 });
    console.log("iPhone добавлен в массив");
}

console.log(products);

let a = 10;
let b = 5;
let operation = "+"; // +, -, *, /

let result;

switch (operation) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        if (b !== 0) {
            result = a / b;
        } else {
            result = "Ошибка: деление на ноль!";
        }
        break;
    default:
        result = "Неизвестная операция";
}

console.log(`${a} ${operation} ${b} =${result}`);

