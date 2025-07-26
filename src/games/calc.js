const genNumber = () => {
  return Math.floor(Math.random() * (100 - 1.1) + 1.1)
}

const genOperation = () => {
  const operations = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operations.length)
  return operations[randomIndex]
}

const calcuration = (operandFirst, operandSecond, operation) => {
  switch (operation) {
    case '+':
      return operandFirst + operandSecond
    case '-':
      return operandFirst - operandSecond
    case '*':
      return operandFirst * operandSecond
    default:
      return
  }
}

export const funcCalc = () => {
  const operandFirst = genNumber()
  const operandSecond = genNumber()
  const operation = genOperation()

  const expression = `${operandFirst} ${operation} ${operandSecond}`
  return [expression, calcuration(operandFirst, operandSecond, operation)]
}
