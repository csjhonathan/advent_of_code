import { input1, input2 } from "../input"

const isOutOflimit = (n1:number, n2:number) => {
  if(n1 === n2) return true
  if ( !n2 ) return false

  const limit = Math.abs(n1 - n2)
  return limit > 3 && limit !== 0 
}

const hasAOrder = (arr:number[]) => {
  const asc_list = [...arr].sort((a, b) => a - b)
  const desc_list = [...arr].sort((a, b) => b - a)

  const list_str = JSON.stringify(arr)
  const asc_list_str = JSON.stringify(asc_list)
  const desc_list_str = JSON.stringify(desc_list)

  return ((list_str === asc_list_str ) || (list_str === desc_list_str))
}

const isListSecure = (arr:number[]) => {
  return !hasSomeOutOfLimit(arr) && hasAOrder(arr)
}

const hasSomeOutOfLimit = (list:number[]) => {
  for (let i = 0; i < list.length; i++) {
    const current_el = list[i];
    const next_el = list[i+1];
    if(isOutOflimit(current_el, next_el)) {
      return true;
    }
  }
  return false
}

const checkMustBeSecure = (arr: number[], current_index = 0) => {
  if (current_index > arr.length) return false;

  const may_secure_arr = arr.filter((_, index) => index !== current_index)

  if (isListSecure(may_secure_arr)) return true

  return checkMustBeSecure(arr, current_index + 1)
}

const sla = (arr1: Array<Array<number>>) => {
  const security_lists = []

  for (const list of arr1){
    if(checkMustBeSecure(list)){
      security_lists.push(list)
    }
  }

  return security_lists.length
} 

console.log(sla(input2))