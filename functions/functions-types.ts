// Name function

function add(x: number, y: number): number {
  return x + y;
}
console.log("🚀 ~ file: functions.ts ~ line 4 ~ add ~ add", add(1, 4));

// Anonymous function

let myAdd = function (x: number, y: number): number {
  return x + y;
};

console.log("🚀 ~ file: functions.ts ~ line 13 ~ myAdd", myAdd(5, 5));
