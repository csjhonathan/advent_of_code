import { input1, input2, inputeste } from "../input"

const isOutOflimit = (n1: number, n2: number) => {
  if (n1 === n2) return true
  if (!n2) return false

  const limit = Math.abs(n1 - n2)
  return limit > 3 && limit !== 0
}

const hasAOrder = (arr: number[]) => {
  const asc_list = [...arr].sort((a, b) => a - b)
  const desc_list = [...arr].sort((a, b) => b - a)

  const list_str = JSON.stringify(arr)
  const asc_list_str = JSON.stringify(asc_list)
  const desc_list_str = JSON.stringify(desc_list)

  return ((list_str === asc_list_str) || (list_str === desc_list_str))
}

const isListSecure = (arr: number[]) => {
  return !hasSomeOutOfLimit(arr) && hasAOrder(arr)
}

// const isCompatible = (n1:number, n2:number, order:string) => {
//   if ( !n2 ) return true
//   if ( n1 === n2) return false

//   const is_orderned = order === "asc"  ? n1 < n2 : n1 > n2
//   return Math.abs(n1 - n2) <= 3 && is_orderned
// }

const hasSomeOutOfLimit = (list: number[]) => {
  for (let i = 0; i < list.length; i++) {
    const current_el = list[i];
    const next_el = list[i + 1];
    if (isOutOflimit(current_el, next_el)) {
      return true;
    }
  }
  return false
}

const sla = (arr1: Array<Array<number>>) => {
  const non_security_lists = []
  const security_lists = []

  for (const list of arr1) {
    if (isListSecure(list)) security_lists.push(list)
    else non_security_lists.push(list)
  }
  for (const list of non_security_lists) {
    for (let i = 0; i < list.length; i++) {
      const newArray = [...list]
      newArray.splice(i, 1)
      if (isListSecure(newArray)) {
        security_lists.push(list)
        break
      }
    }
  }

  return security_lists.length
}

console.log(sla(input2))