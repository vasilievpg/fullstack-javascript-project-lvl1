import randInt from '../lib/randint.js';

export const description = 'Find the greatest common divisor of given numbers.';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (
    let divider = 2;
    divider < Math.floor(Math.sqrt(number - 1));
    divider += 1
  ) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

export const getQuestionAndAnswer = () => {
  const number = randInt(1, 1000);
  const question = number.toString();

  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer.toString()];
};
