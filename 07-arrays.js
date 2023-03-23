"use strict";
(() => {
    let prices = [1, 2, 3, 4, 5, 6, 22, "hola", true];
    // prices.push("dd")
    // prices.push(true)
    prices.push(123344);
    let products = ["hola", true];
    products.push(true);
    products.push(23);
    products.push("hi");
    products.push([]);
    products.push({});
    let numbers = [2233];
    numbers.map((item) => item * 2);
    console.log(numbers.map((item) => item * 2));
})();
