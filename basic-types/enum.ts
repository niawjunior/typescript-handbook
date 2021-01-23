enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log("🚀 ~ file: enum.ts ~ line 7 ~ c", c);

enum Color2 {
  Red = 1,
  Green,
  Blue,
}

let d: Color2 = Color2.Green;
console.log("🚀 ~ file: enum.ts ~ line 16 ~ d", d);
let colorName: string = Color2[2];
