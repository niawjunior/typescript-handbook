let someValue: unknown = "this is a string";
console.log("🚀 ~ file: type-assertions.ts ~ line 2 ~ someValue", someValue);
let strLength: number = (someValue as string).length;
console.log("🚀 ~ file: type-assertions.ts ~ line 4 ~ strLength", strLength);

// the other version is the "angle-bracket" syntax

let strLength2: number = (<string>someValue).length;
console.log("🚀 ~ file: type-assertions.ts ~ line 8 ~ strLength2", strLength2);
