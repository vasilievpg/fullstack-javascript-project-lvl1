import randInt from '../lib/randint.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getQuestionAndAnswer = () => {
  const question = randInt(3);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
