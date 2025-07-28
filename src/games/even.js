import { generator } from '../index.js'

const isEven = num => num % 2 === 0

export const funcEven = () => {
  const number = generator (1, 100)
  return [number, isEven(number) ? 'yes' : 'no']
}
