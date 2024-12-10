import { string1 } from "../input";

console.log(((str: string) => {
  let sum = 0
  let can_mult = true
  const listMuls = str.match(/(?:mul\(([a-zA-Z0-9]{1,3}),([a-zA-Z0-9]{1,3})\)|don'?t\(\)|do\(\))/g)
  listMuls.forEach(aaaaa => {
    if(aaaaa === "do()") can_mult = true
    if(aaaaa === "don't()") can_mult = false
    if(aaaaa.includes("mul") && can_mult){
      const blams = aaaaa.replace("mul(","").replace(")","").split(",");
      const mult = +blams[0] * +blams[1]
      sum += mult
    }
  })
  return sum
})(string1))