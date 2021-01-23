let notSure: unknown = 4;
console.log("🚀 ~ file: unknown.ts ~ line 3 ~ notSure", notSure);
notSure = "maybe a string instead";
console.log("🚀 ~ file: unknown.ts ~ line 2 ~ notSure", notSure);
// Ok definitely a boolean
notSure = false;
console.log("🚀 ~ file: unknown.ts ~ line 7 ~ notSure", notSure);
