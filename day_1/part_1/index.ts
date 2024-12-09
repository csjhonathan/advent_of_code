import { input1, input2 } from "../input"

const sla = (arr1:Array<number>, arr2:Array<number>) => {
  let distanceTotal = 0
  
  for (let ind in arr1) {
    distanceTotal += Math.abs(arr2[ind] - arr1[ind])
  }

  return distanceTotal
} 

console.log(sla(input1, input2))