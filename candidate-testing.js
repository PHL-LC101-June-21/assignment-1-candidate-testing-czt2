 const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"]
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    let candidateName = input.question("Enter your name: ");
  console.log(`Welcome ${candidateName}`);


}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (i = 0; i < questions.length; i++)
candidateAnswers.push(input.question(questions[i]));

}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  /*if (candidateAnswer == correctAnswer) {
    console.log("Question 1 was answered correctly.");
  } else {
    console.log("Question 1 was answered incorrectly.");
  }*/
  console.log()
  for (j = 0; j < candidateAnswers.length; j ++){
    console.log(`Your answer for question ${j + 1} was ${candidateAnswers[j]} and the correct answer was ${correctAnswers[j]}.\n`)
  }

  let grade = 0;

  for (let i = 0; i < candidateAnswers.length; i ++){
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()){
      grade = grade + 1
    }
  }
  let testScore = grade / questions.length * 100

  console.log(`Overall Grade: ${testScore}%\nYou correctly answered ${grade} out of ${questions.length} questions`)
  
  if (grade >= 4){
    console.log('STATUS: Passed')
  } else {
    console.log('STATUS: Failed')
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};