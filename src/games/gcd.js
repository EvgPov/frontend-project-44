import { generator } from '../index.js'

const findGCD = (numberFirst, numberSecond) => {
  let remainder = 1

  if (numberFirst < numberSecond) {
    const number = numberFirst
    numberFirst = numberSecond
    numberSecond = number
  }

  while (remainder !== 0) {
    remainder = numberFirst % numberSecond
    numberFirst = numberSecond
    numberSecond = remainder
  }
  return numberFirst
}

export const funcGCD = () => {
  const numberFirst = generator(1, 100)
  const numberSecond = generator(1, 100)
  const expression = `${numberFirst} ${numberSecond}`
  return [expression, findGCD(numberFirst, numberSecond)]
}
