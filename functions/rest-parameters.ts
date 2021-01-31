function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(
  "🚀 ~ file: rest-parameters.ts ~ line 7 ~ employeeName",
  employeeName
);

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
console.log(
  "🚀 ~ file: rest-parameters.ts ~ line 13 ~ buildNameFun",
  buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie")
);
