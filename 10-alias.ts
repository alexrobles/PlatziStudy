(() => {
  type UserID = string | number | boolean;
  type Size = "S" | "M" | "L" | "XL";
  let userId: UserID;
  const greeting = (userId: UserID, size: Size) => {
    if (typeof userId === "string") {
      console.log(userId.toLowerCase());
    }
  };

  greeting(1233, "S");
})();
