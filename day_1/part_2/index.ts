import { input1, input2 } from "../input"

const sla = (arr1:Array<number>, arr2:Array<number>) => {
  let scoreTotal = 0
  
  
  for (let id1 of arr1) {
    scoreTotal += id1 * arr2.filter(id2 => id2 === id1).length
  }

  return scoreTotal
} 

console.log(sla(input1, input2))