(()=>{
    type Sizes = 'S' | 'M' | 'L' | 'XL'
    const creatProduct = (
        title : string,
        createdAt : Date,
        stock : number,
        size? : Sizes
    ) => {
        return {
            title,
            createdAt,
            stock,
            size
        }
    }


    const product1 = creatProduct('MyProduct', new Date(), 12)
    console.log(product1);
    console.log(product1.title)
    console.log(product1.stock)
    console.log(product1.createdAt)
    console.log(product1.size)


})()