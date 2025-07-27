import readlineSync from 'readline-sync'
import { getName } from '../src/cli.js'
import { funcEven } from './games/even.js'
import { funcCalc } from './games/calc.js'
import { funcGCD } from './games/gcd.js'
import { funcProgression } from './games/progression.js'
import { funcPrimeNumber } from './games/prime.js'

export const generator = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

export const funcPrime = (playName) => {
  const name = getName()
  let counter = 0

  while (counter !== 3) {
    let data
    let question
    let correctAnswer
    switch (playName) {
      case 'even':
        console.log('Answer "yes" if the number is even, otherwise answer "no".')
        data = funcEven()
        question = data[0]
        correctAnswer = data[1]
        break
      case 'calc':
        console.log('What is the result of the expression?')
        data = funcCalc()
        question = data[0]
        correctAnswer = String(data[1])
        break
      case 'gcd':
        console.log('Find the greatest common divisor of given numbers.')
        data = funcGCD()
        question = data[0]
        correctAnswer = String(data[1])
        break
      case 'progression':
        console.log('What number is missing in the progression?')
        data = funcProgression()
        question = data[0]
        correctAnswer = String(data[1])
        break
      case 'prime':
        console.log('Answer "yes" if given number is prime. Otherwise answer "no"')
        data = funcPrimeNumber()
        question = data[0]
        correctAnswer = String(data[1])
        break
    }
    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer :(. Correct answer was "${correctAnswer}". \n Let\`s try again, ${name}!`)
      return
    }
    else {
      counter += 1
      console.log(`Correct!`)
    }
  }
  console.log(`Congratulations, ${name}!`)
}
