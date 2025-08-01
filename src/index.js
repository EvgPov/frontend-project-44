import { randomInt } from 'crypto'
import readlineSync from 'readline-sync'
import { getName } from '../src/cli.js'
import { funcEven } from './games/even.js'
import { funcCalc } from './games/calc.js'
import { funcGCD } from './games/gcd.js'
import { funcProgression } from './games/progression.js'
import { funcPrimeNumber } from './games/prime.js'

export const generator = (min, max) => {
  return randomInt(min, max + 1)
}

const runGame = (gameName) => {
  switch (gameName) {
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".')
      return funcEven()
    case 'calc':
      console.log('What is the result of the expression?')
      return funcCalc()
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.')
      return funcGCD()
    case 'progression':
      console.log('What number is missing in the progression?')
      return funcProgression()
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no"')
      return funcPrimeNumber()
  }
}

const askQuestion = (question) => {
  console.log(`Question: ${question}`)
  return readlineSync.question('Your answer: ')
}

export const playGame = (gameName) => {
  console.log('Welcome to the Brain Games!') // приветствие
  const name = getName() // получение имени
  let counter = 0

  while (counter !== 3) {
    let data
    let correctAnswer
    let answer
    data = runGame(gameName) // подготовка данных для вопроса и расчет правильного ответа
    answer = askQuestion(data.data) // задать вопрос и получить ответ пользователя
    correctAnswer = String(data.correctAnswer) // сохранение правильтного ответа
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer :(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`)
      return
    }
    else {
      counter += 1
      console.log(`Correct!`)
    }
  }
  console.log(`Congratulations, ${name}!`)
}
