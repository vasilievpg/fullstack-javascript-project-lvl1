export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getQuestionAndAnswer = () => {
  const question = Math.floor(Math.random() * 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
