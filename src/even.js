import readlineSync from 'readline-sync';
import name from 'cli.js';

const even = () => {
  let numberCorrectAnswer = 0;
  let correctAnswer = '';

  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  while (numberCorrectAnswer <= 3) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    console.log(`Question, ${randomNumber}!`);
    const answer = readlineSync.question('Your answer: '); 
    if (answer === correctAnswer) {
      console.log("Correct!");
      numberCorrectAnswer += 1;
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again "${name} !`);
      }
    }
    console.log(`Congratulations, ${name}!`);
  };

  even();

export default even;