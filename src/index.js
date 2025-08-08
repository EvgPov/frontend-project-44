import { randomInt } from 'crypto';
import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';
import { funcEven } from './games/even.js';
import { funcCalc } from './games/calc.js';
import { funcGCD } from './games/gcd.js';
import { funcProgression } from './games/progression.js';
import { funcPrimeNumber } from './games/prime.js';

const gameChoice = {
  even: {
    message: 'Answer "yes" if the number is even, otherwise answer "no".',
    gameFunction: funcEven,
  },
  calc: {
    message: 'What is the result of the expression?',
    gameFunction: funcCalc,
  },
  gcd: {
    message: 'Find the greatest common divisor of given numbers.',
    gameFunction: funcGCD,
  },
  progression: {
    message: 'What number is missing in the progression?',
    gameFunction: funcProgression,
  },
  prime: {
    message: 'Answer "yes" if given number is prime. Otherwise answer "no"',
    gameFunction: funcPrimeNumber,
  },
};

export const generator = (min, max) => {
  // генератор целых чисел
  return randomInt(min, max + 1);
};

const runGame = gameName => {
  // запуск выбранной игры
  return gameName();
};

const getUserAnswer = question => {
  // задать вопрос - получить ответ пользователя
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const checkAnswer = (userAnswer, correctAnswer) => {
  // проверить ответ
  return userAnswer !== String(correctAnswer);
};

export const playGame = gameName => {
  // функция реализующая выбранную игру
  console.log('Welcome to the Brain Games!');
  const name = getName(); // получение имени игрока

  console.log(gameChoice[gameName]['message']);
  let counter = 0;

  while (counter !== 3) {
    const data = runGame(gameChoice[gameName]['gameFunction']); // подготовка данных для вопроса и расчет правильного ответа
    const question = data.data; // вопрос
    const correctAnswer = data.correctAnswer; // правильный ответ
    const userAnswer = getUserAnswer(question); // полу ответа пользователя
    if (checkAnswer(userAnswer, correctAnswer)) {
      // если ответ неверный
      console.log(
        `"${userAnswer}" is wrong answer :(. Correct answer was "${String(correctAnswer)}".\nLet's try again, ${name}!`,
      );
      return; // неудачное завершение игры
    } else {
      counter++; // если ответ верный
      console.log(`Correct!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
  return; // успешное завершение игры
};
