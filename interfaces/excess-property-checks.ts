interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  console.log(config);
  return {
    color: config.color || "read",
    area: config.width ? config.width * config.width : 20,
  };
}

let mySquare = createSquare(<SquareConfig>{ width: 100, opacity: 0.5 });

let mySquare2 = createSquare({ colour: "red", width: 100 });
