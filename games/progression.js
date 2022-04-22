import randInt from '../lib/randint.js';

export const description = 'What number is missing in the progression?';

export const getQuestionAndAnswer = () => {
  const start = randInt(1, 100);
  const step = randInt(1, 100);
  const lengthProgression = randInt(5, 10);
  const progression = [];

  for (let i = 1; i <= lengthProgression; i += 1) {
    progression.push(start + i * step);
  }

  const hiddenElementIndex = randInt(0, lengthProgression - 1);
  const answer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return [question, answer.toString()];
};
