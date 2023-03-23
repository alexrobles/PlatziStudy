"use strict";
(() => {
    let myDynamicVar;
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = "";
    myDynamicVar = "hola";
    const rta = myDynamicVar.toLowerCase();
    console.log(rta);
})();
