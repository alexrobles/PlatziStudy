(() => {
    let productTitle = 'My awesome product';
  
    productTitle = 'My awesome product changed'
    console.log("productTitle", productTitle);

    const productDescription = "I'm bla bla bla bla bla"
    console.log('productDescription', productDescription)

    const summary = `
    title : ${productTitle}
    description : ${productDescription}
    `
    console.log('summary',summary)
  
  })();