const genNumber = () => {
  return Math.floor(Math.random() * (100 - 1.1) + 1.1)
}

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
  const numberFirst = genNumber()
  const numberSecond = genNumber()
  const expression = `${numberFirst} ${numberSecond}`
  return [expression, findGCD(numberFirst, numberSecond)]
}
