"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.addProduct)({ title: "Pro1", createdAt: new Date(), stock: 6 });
(0, product_service_1.addProduct)({ title: "Pro2", createdAt: new Date(), stock: 5 });
console.log(product_service_1.products);
console.log((0, product_service_1.calcStock)());
