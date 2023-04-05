(() => {
    type Size = "S" | "M" | "L" | "XL";
    type Product = {
      title: string;
      createdAt: Date;
      stock: number;
      size?: Size;
    };

    const products: Product[] = [];

    const rta = 1 +'1';
    console.log(rta)

    let produ: [number|boolean];

    produ = [true]
  
    const addProduct = (data: Product) => {
      products.push(data);
    };
  
    addProduct({ title: "titt", createdAt: new Date(), stock: 122 });
    addProduct({ title: "titt", createdAt: new Date(), stock: 122 });
    console.log(products);
  })();
  