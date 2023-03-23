"use strict";
(() => {
    const login = (data) => { };
    login({
        email: "jeison@cc.com",
        password: 2121212,
    });
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({ title: "titt", createdAt: new Date("yyyy-MM-DD"), stock: 122 });
    addProduct({ title: "titt", createdAt: new Date("yyyy-MM-DD"), stock: 122 });
    addProduct({
        title: "titt",
        createdAt: new Date("yyyy-MM-DD"),
        stock: 122,
        size: "XL",
    });
    console.log(products);
})();
