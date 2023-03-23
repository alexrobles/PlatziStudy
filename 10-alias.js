"use strict";
(() => {
    let userId;
    const greeting = (userId, size) => {
        if (typeof userId === "string") {
            console.log(userId.toLowerCase());
        }
    };
    greeting(1233, "S");
})();
