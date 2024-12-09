import { input1, input2 } from "../input"

const compare = (n1:number, n2:number, order:string) => {
  if (order === "asc") return n1 >= n2
  else return n1 <= n2
}

const sla = (arr1:Array<Array<number>>) => {
  let securesTotal = 0
  for (const list of arr1){

    let secureList = true
    const first_el = list[0]
    const second_el = list[1]

    if (first_el === second_el) continue
    
    const order = first_el < second_el ? "asc" : "desc"

    for(const index in list) {
      const current_el = list[index]
      const next_el = list[+index + 1]
      if ( !next_el ) break
      if ( compare(current_el,next_el,order) || (Math.abs(current_el - next_el) > 3)) {
        secureList = false
        break
      }
    }
    secureList && securesTotal ++
  }
  return securesTotal
} 

console.log(sla(input2))