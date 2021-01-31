function buildName(firstName: string, lastName?: string, age = 20) {
  if (lastName) return firstName + " " + lastName + " age: " + age;
  else return firstName + " age: " + age;
}

let result1 = buildName("Bob");
console.log(
  "🚀 ~ file: optional-and-default-parameters.ts ~ line 6 ~ result1",
  result1
);

let result2 = buildName("Bob", "Adams");
console.log(
  "🚀 ~ file: optional-and-default-parameters.ts ~ line 13 ~ result2",
  result2
);
let result3 = buildName("Bob", "Adams", 30);
console.log(
  "🚀 ~ file: optional-and-default-parameters.ts ~ line 18 ~ result3",
  result3
);
