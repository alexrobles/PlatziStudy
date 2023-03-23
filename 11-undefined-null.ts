(() => {
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null;
  myNumber = 12;

  let myString: string | null;
  myString = "Heiii";

  const hi = (name: string | null) => {
    let hello = "hola";
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
    
  };

  const hi2 = (name: string | null) => {
    let hello = "hola";
    hello += name?.toLowerCase() || 'nobody'
    console.log(hello)
  };

  hi(null)
  hi2(null)
})();
