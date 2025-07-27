import { generator } from '../index.js'

const isEven = (num) => {
  if (num % 2 === 0) return true
  else return false
}

export const funcEven = () => {
  const number = generator (1, 100)
  return [number, isEven(number) ? 'yes' : 'no']
}
