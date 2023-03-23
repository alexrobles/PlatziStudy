(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = "";

  myDynamicVar = "hola";
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);
})();
