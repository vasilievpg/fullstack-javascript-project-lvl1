import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const run = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default run;
