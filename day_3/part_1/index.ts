import { string1 } from "../input";

console.log(((str: string) => {
  let sum = 0
  const listMuls = str.match(/mul\(([0-9]{1,3}),([0-9]{1,3})\)/g)
  listMuls.forEach(mul => {
    const blams = mul.replace("mul(","").replace(")","").split(",");
    const mult = +blams[0] * +blams[1]
    sum += mult
    return mult
  })
  return sum
})(string1))