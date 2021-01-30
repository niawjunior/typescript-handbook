interface SearchFunc {
  (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (src, sub) => {
  return src.search(sub) > -1;
};

console.log(mySearch("hello", "h"));
console.log(mySearch("hello", "a"));
