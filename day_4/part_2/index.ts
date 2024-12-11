import { string1, string_teste } from "../input";

// const isValidPair = (a: string | undefined, b: string | undefined) => a && b && ![a, b].includes("A") && ![a, b].includes("X") && a !== b;

const hasXmas = (i: number, j: number, matriz: string[][]) => {
  let catches = 0
  const supEsq = matriz[i-1]?.[j-1]
  const supDir = matriz[i-1]?.[j+1]
  const infEsq = matriz[i+1]?.[j-1]
  const infDir = matriz[i+1]?.[j+1]

  // const oposto1 = isValidPair(supEsq, infDir);
  // const oposto2 = isValidPair(supDir, infEsq);

  // if(oposto1 && oposto2) catches++

  if((supEsq === "M" && infDir === "S" || supEsq === "S" && infDir === "M") && (supDir === "M" && infEsq === "S" || supDir === "S" && infEsq === "M")) catches++

  return catches
}

console.log(((matriz: string[][]) => {
  let bingo = 0
  for (let i = 0; i < matriz.length; i++) {
    const line = matriz[i];
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === "A") {
        bingo+= hasXmas(i, j, matriz)
      }
    }
  }
  return bingo
})(string_teste))