#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { name } from '../src/cli.js'

const isEven = (num) => {
  if (num % 2 === 0) return 'yes'
  else return 'no'
}

export const checkingOfEven = () => {
  let counter = 0

  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  while (counter !== 3) {
    const number = Math.floor(Math.random() * (20 - 1.1) + 1.1)
    console.log(`Question: ${number}`)
    const answer = String(readlineSync.question('Your answer: '))
    if ((answer !== 'yes' && answer !== 'no') || answer !== isEven(number)) {
      console.log(`"${answer}" is wrong answer :(. Correct answer was "${isEven(number)}". Let\`s try again, ${name}`)
      return
    }
    else {
      counter += 1
      console.log(`Correct!`)
    }
  }
}
checkingOfEven()