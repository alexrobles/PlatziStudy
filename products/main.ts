import { addProduct, calcStock, products } from "./product.service";

addProduct({ title: "Pro1", createdAt: new Date(), stock: 6 });
addProduct({ title: "Pro2", createdAt: new Date(), stock: 5 });

console.log(products)
console.log(calcStock())
