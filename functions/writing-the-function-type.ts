let myAdd: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

console.log(
  "🚀 ~ file: writing-the-function-type.ts ~ line 5 ~ myAdd",
  myAdd(1, 5)
);
