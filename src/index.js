import readlineSync from 'readline-sync'
import { getName } from '../src/cli.js'
import { funcEven } from './games/even.js'

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
    }
    console.log(`Question: ${question}`)
    const answer = String(readlineSync.question('Your answer: '))
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer :(. Correct answer was "${correctAnswer}". Let\`s try again, ${name}!`)
      return
    }
    else {
      counter += 1
      console.log(`Correct!`)
    }
  }
  console.log(`Congratulations, ${name}!`)
}
