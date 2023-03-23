(() => {
  let userId : string | number;
  userId = 21212122;
  userId = "12-eerre";

  const greeting = (mytext: string | number) => {
    if (typeof mytext === "string") {
      console.log(mytext.toLowerCase());
    } else {
      console.log(mytext.toFixed(2));
    }
  };

  greeting("Jei")
  greeting(23433)
})();
