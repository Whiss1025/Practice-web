const questions = [
  {
    question: "The SQL SELECT statement is used to select ______ data from a database table",
    answers: [
      { text: "Backup", correct: false},
      { text: "Update", correct: false},
      { text: "Retrieve", correct: true},
      { text: "Remove", correct: false},
    ]
  },
  {
    question: "To select all columns from a database table, we use ______ character.",
    answers: [
      { text: "*", correct: true},
      { text: "all", correct: false},
      { text: "+", correct: false},
      { text: "=", correct: false},
    ]
  },
  {
    question: "The OR operator displays a record if any of the conditions are ______.",
    answers: [
      { text: "Between", correct: false},
      { text: "True", correct: true},
      { text: "False", correct: false},
      { text: "Null", correct: false},
    ]
  },
  {
    question: "What is correct syntax of Where Clause , Choice the correct syntax",
    answers: [
      { text: "SELECT & FROM SQL_VERSE where ", correct: false},
      { text: "SELECT * FROM SQL_VERSE WHERE", correct: true},
      { text: "select * from sql_verse where", correct: true},
      { text: "Select sql_verse where", correct: false},
    ]
  },
  {
    question: "The AND operator displays a record if all the conditions are TRUE.",
    answers: [
      { text: "Between", correct: false},
      { text: "True", correct: true},
      { text: "False", correct: false},
      { text: "Null", correct: false},
    ]
  },
  {
    question: "Operator selects data if the given condition is FALSE.",
    answers: [
      { text: "Or Operator", correct: false},
      { text: "And Operator", correct: true},
      { text: "Select", correct: false},
      { text: "Not Operator", correct: true},
    ]
  },
  {
    question: "It is used to modify the existing records in a table",
    answers: [
      { text: "Delete", correct: false},
      { text: "Update", correct: true},
      { text: "Rename", correct: false},
      { text: "Alter", correct: false},
    ]
  },
  {
    question: "TRUE OR FALSE: The DELETE clause is used to delete row(s) from a database table",
    answers: [
      { text: "False", correct: false},
      { text: "True", correct: true},
      { text: "No", correct: false},
      { text: "Yes", correct: false},
    ]
  },
  {
    question: "TRUE OR FALSE: It is also possible to combine multiple AND,OR and NOT operators in an SQL statement",
    answers: [
      { text: "False", correct: false},
      { text: "Yes", correct: false},
      { text: "No", correct: false},
      { text: "True", correct: true},
    ]
  },
  {
    question: "What is correct syntax of Select, Choice the correct syntax",
    answers: [
      { text: "column1 and column2 is Selected", correct: false},
      { text: "column1 Select column 2", correct: false},
      { text: "Select column 1, column2", correct: true},
      { text: "Select * from column1", correct: false},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
 
function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.
  question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display ="block";
}


function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}


nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});


startQuiz();