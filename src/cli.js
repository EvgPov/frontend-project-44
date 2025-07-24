import readlineSync from 'readline-sync'

export let name = ''
export function helloUser() {
  name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
}
