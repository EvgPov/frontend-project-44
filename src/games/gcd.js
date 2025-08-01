import { generator } from '../index.js'

export const funcGCD = () => {
  const object = {
    numberFirst: generator(1, 100),
    numberSecond: generator(1, 100),
    correctAnswer: function () {
      let remainder = 1

      if (this.numberFirst < this.numberSecond) { // меняем местами, чтобы первое число всегда было больше второго
        const number = this.numberFirst
        this.numberFirst = this.numberSecond
        this.numberSecond = number
      }

      while (remainder !== 0) {
        remainder = this.numberFirst % this.numberSecond
        this.numberFirst = this.numberSecond
        this.numberSecond = remainder
      }
      return this.numberFirst
    },
  }
  return {
    data: `${object.numberFirst} ${object.numberSecond}`,
    correctAnswer: object.correctAnswer(),
  }
}
