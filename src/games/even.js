import { generator } from '../index.js';

const isEven = num => num % 2 === 0;

export const funcEven = () => {
  const num = generator(1, 100);
  return { data: num, correctAnswer: isEven(num) ? 'yes' : 'no' };
};
