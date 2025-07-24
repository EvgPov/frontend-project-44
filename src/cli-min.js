import readlineSync from 'readline-sync'
export function helloUser() {
  const e = readlineSync.question('May I have your name?')
  console.log(`Hello, ${e}!`)
}
