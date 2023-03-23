(() => {
  type Size = "S" | "M" | "L" | "XL";
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Size;
  };
  const login = (data: { email: string; password: number }) => {};

  login({
    email: "jeison@cc.com",
    password: 2121212,
  });

  const products: Product[] = [];

  const addProduct = (data: Product) => {
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
