import { generator } from '../index.js'

const genOperation = () => {
  const operations = ['+', '-', '*']
  const randomIndex = generator(0, operations.length - 1)
  return operations[randomIndex]
}

export const funcCalc = () => {
  const object = {
    operandFirst: generator(1, 100),
    operandSecond: generator(1, 100),
    operation: genOperation(),
    calcuration: function () {
      switch (this.operation) {
        case '+':
          return this.operandFirst + this.operandSecond
        case '-':
          return this.operandFirst - this.operandSecond
        case '*':
          return this.operandFirst * this.operandSecond
      }
    }
  }
  return {
    data: `${object.operandFirst} ${object.operation} ${object.operandSecond}`,
    correctAnswer: object.calcuration(),
  }
}
