import { generator } from '../index.js'

const genOperation = () => {
  const operations = ['+', '-', '*']
  const randomIndex = generator(0, operations.length - 1)
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
  const operandFirst = generator(1, 100)
  const operandSecond = generator(1, 100)
  const operation = genOperation()

  const expression = `${operandFirst} ${operation} ${operandSecond}`
  return {
    data: expression,
    correctAnswer: calcuration(operandFirst, operandSecond, operation),
  }
}
