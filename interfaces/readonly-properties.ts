interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
console.log("🚀 ~ file: readonly-properties.ts ~ line 7 ~ p1", p1);

let a: number[] = [1, 2, 3, 4];

a.push(5);
console.log("🚀 ~ file: readonly-properties.ts ~ line 12 ~ a", a);

let b: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// b.push(6)
//Property 'push' does not exist on type 'readonly number[]'.

console.log("🚀 ~ file: readonly-properties.ts ~ line 16 ~ b", b.length);

// back to a normal array
let c = <number[]>b;
c.push(6);
console.log("🚀 ~ file: readonly-properties.ts ~ line 22 ~ c", c);

// readonly vs const
// The easiest way to remember whether to use readonly or const is to ask whether you're using it on a variable or a property.
// Variables use const whereas properties use readonly.
