import randInt from '../lib/randint.js';

export const description = 'What is the result of the expression?';

export const getQuestionAndAnswer = () => {
  const a = randInt(1, 10);
  const b = randInt(1, 10);
  const operations = ['+', '-', '*'];
  const operation = operations[randInt(0, 2)];

  const question = `${a} ${operation} ${b}`;

  let answer;

  switch (operation) {
    case '+':
      answer = a + b;
      break;
    case '-':
      answer = a - b;
      break;
    case '*':
      answer = a * b;
      break;
    default:
      break;
  }
  return [question, answer.toString()];
};
