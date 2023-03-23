(()=> {
    //Inferid Way
    let productPrice = 100;
    productPrice = 12;
    console.log('productPrice', productPrice);

    //Explicit Way
    let customerAge: number  = 18; 
    customerAge = customerAge + 1;
    console.log(productPrice)
    console.log('customerAge', customerAge);

    let productInStock : number = 2;
    console.log("productInStock", productInStock)
    if (productInStock > 10) {
        console.log('is greater')
    }
    let discount = parseInt('220')
    if (discount <=  220) {
        console.log('apply')
    }else{
        console.log('doesnt aply ')
    }
    console.log('discount', discount)

    let hex = 0xff;
    console.log('hex',hex)
    let bin = 0b1010;
    console.log('bin', bin)

     // Don't type with number in uppercase
    const myNumber : number = 10;
})()