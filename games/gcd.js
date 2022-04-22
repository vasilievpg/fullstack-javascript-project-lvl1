import randInt from '../lib/randint.js';

export const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => (b === 0 ? a : findGcd(b, a % b));

export const getQuestionAndAnswer = () => {
  const a = randInt(1, 100);
  const b = randInt(1, 100);

  const question = `${a} ${b}`;

  const answer = findGcd(a, b);
  return [question, answer.toString()];
};
