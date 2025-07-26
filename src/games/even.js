const isEven = (num) => {
  if (num % 2 === 0) return 'yes'
  else return 'no'
}

const genNumber = () => {
  return Math.floor(Math.random() * (100 - 1.1) + 1.1)
}

export const funcEven = () => {
  const number = genNumber()
  return [number, isEven(number)]
}
