"use strict";
(() => {
    const creatProduct = (title, createdAt, stock, size) => {
        return {
            title,
            createdAt,
            stock,
            size
        };
    };
    const product1 = creatProduct('MyProduct', new Date(), 12);
    console.log(product1);
    console.log(product1.title);
    console.log(product1.stock);
    console.log(product1.createdAt);
    console.log(product1.size);
})();
