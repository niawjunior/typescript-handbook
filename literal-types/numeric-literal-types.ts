function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();
console.log("🚀 ~ file: numeric-literal-types.ts ~ line 5 ~ result", result);

interface MapConfig {
  lng: number;
  lat: number;
  titleSize: 8 | 16 | 32;
}

const setupMap: MapConfig = { lng: -73.935242, lat: 40.73061, titleSize: 16 };
console.log(
  "🚀 ~ file: numeric-literal-types.ts ~ line 15 ~ setupMap",
  setupMap
);
