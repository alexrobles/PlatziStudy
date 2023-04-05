"use strict";
(() => {
    const products = [];
    const rta = 1 + '1';
    console.log(rta);
    let produ;
    produ = [true];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({ title: "titt", createdAt: new Date(), stock: 122 });
    addProduct({ title: "titt", createdAt: new Date(), stock: 122 });
    console.log(products);
})();
