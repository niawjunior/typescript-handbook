interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log("🚀 ~ file: indexable-types.ts ~ line 9 ~ myStr", myStr);
