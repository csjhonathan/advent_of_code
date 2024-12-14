import { inputRules, inputUpdates, input2 as rulesExample, input3 as updatesExample } from "../input";

const checkUpdatesOrder = (rules: number[][], update: number[]) => {

  const filtered_rules = rules.filter(rule => rule.every(page => update.includes(page)))

  for(const i in update) {
    const countLeft = filtered_rules.reduce((acc,rule) => {
      if(rule[0] === update[i]) return acc + 1
      return acc
    },0)
    if (countLeft !== (update.length - (+i + 1))) {
      return false
    }
  }
  return true
}

const main = (rules:number[][], updates: number[][]) => {
  const filtered_updates = updates.filter(update => checkUpdatesOrder(rules, update))
  return filtered_updates.reduce((acc,update) => {
    return acc + update[Math.floor(update.length/2)]
  },0)
}


console.log(
  main(inputRules, inputUpdates)
)