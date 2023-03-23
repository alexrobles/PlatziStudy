"use strict";
(() => {
    let myNull = null;
    let myUndefined = undefined;
    let myNumber;
    myNumber = 12;
    let myString;
    myString = "Heiii";
    const hi = (name) => {
        let hello = "hola";
        if (name) {
            hello += name;
        }
        else {
            hello += 'nobody';
        }
        console.log(hello);
    };
    const hi2 = (name) => {
        let hello = "hola";
        hello += (name === null || name === void 0 ? void 0 : name.toLowerCase()) || 'nobody';
        console.log(hello);
    };
    hi(null);
    hi2(null);
})();
