import { generator } from '../index.js'

const isPrimeNumber = (number) => {
  if (number < 2) return false
  if (number === 2) return true
  if (number % 2 === 0) return false
  else {
    for (let i = 3; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false
    }
  }
  return true
}

export const funcPrimeNumber = () => {
  let number = generator (1, 100)
  return [number, isPrimeNumber(number) ? 'yes' : 'no']
}
