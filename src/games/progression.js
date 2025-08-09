import { generator } from '../index.js'

export const funcProgression = () => {
  const length = generator(4, 9)
  const step = generator(5, 10)
  const hiddenPosition = generator(0, length)
  const progression = []

  let correctAnswer
  let item = generator(1, 100)
  let counter = 0

  while (counter <= length) {
    item = item + step
    if (counter === hiddenPosition) {
      correctAnswer = item
      progression.push('..')
    } // иначе добавляем в массив
    else {
      progression.push(item)
    }
    counter += 1
  }
  return { data: progression.join(' '), correctAnswer: correctAnswer }
}
