import { string1, string_teste } from "../input";

const hasXmas = (i: number, j: number, matriz: string[][]) => {
  let catches = 0
  if(matriz[i]?.[j+1] === "M" && matriz[i]?.[j+2] === "A" && matriz[i]?.[j+3] === "S") catches++
  if(matriz[i]?.[j-1] === "M" && matriz[i]?.[j-2] === "A" && matriz[i]?.[j-3] === "S") catches++
  if(matriz[i+1]?.[j] === "M" && matriz[i+2]?.[j] === "A" && matriz[i+3]?.[j] === "S") catches++
  if(matriz[i-1]?.[j] === "M" && matriz[i-2]?.[j] === "A" && matriz[i-3]?.[j] === "S") catches++
  if(matriz[i+1]?.[j+1] === "M" && matriz[i+2]?.[j+2] === "A" && matriz[i+3]?.[j+3] === "S") catches++
  if(matriz[i-1]?.[j+1] === "M" && matriz[i-2]?.[j+2] === "A" && matriz[i-3]?.[j+3] === "S") catches++
  if(matriz[i+1]?.[j-1] === "M" && matriz[i+2]?.[j-2] === "A" && matriz[i+3]?.[j-3] === "S") catches++
  if(matriz[i-1]?.[j-1] === "M" && matriz[i-2]?.[j-2] === "A" && matriz[i-3]?.[j-3] === "S") catches++

  return catches
}

console.log(((matriz: string[][]) => {
  let bingo = 0
  for (let i = 0; i < matriz.length; i++) {
    const line = matriz[i];
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === "X") {
        bingo+= hasXmas(i, j, matriz)
      }
    }
  }
  return bingo
})(string1))