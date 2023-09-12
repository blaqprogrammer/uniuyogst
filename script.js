const questionText = document.getElementById("questionText");
const answerText = document.getElementById("answerText");
const options = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const backButton = document.getElementById("backButton");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const alertText = document.getElementById("alertText");
// const alertTextContent = document.createTextNode("YOUR TIME IS UP");
const userAnswer = {}; // Store user answers

let currentQuestionIndex = 0;
let timeRemaining = 10; // 30 minutes in seconds

let score = 0;

const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "What is communication",
    options: ["boy", "girl", "man", "woman"],
    answer: "woman"
  },
  {
    question: "What is communication and the lubrication of the synthesis",
    options: ["boy", "girl", "man", "woman"],
    answer: "woman"
  },
  {
    question: "What is communication",
    options: ["boy", "girl", "man", "woman"],
    answer: "woman"
  },
];


// Shuffle function to randomize the array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the questions array
shuffleArray(questions);

// Define the number of questions to display (e.g., 3)
const numberOfQuestionsToDisplay = 2;

// Select a subset of questions
const selectedQuestions = questions.slice(0, numberOfQuestionsToDisplay);

// Now, you can use selectedQuestions to display questions to users
selectedQuestions.forEach((question, index) => {
    console.log(`Question ${index + 1}: ${question.question}`);
    console.log(`Options: ${question.options.join(", ")}`);
    // Display the question to the user, and handle user responses.
});



function displayQuestion(index) {
  const question = questions[index];
  questionText.textContent = question.question;
  options.innerHTML = "";

  question.options.forEach((option, idx) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = option;
    options.appendChild(input);
    options.appendChild(document.createTextNode(` ${option}`));
    options.appendChild(document.createElement("br"));
  });
}



function startTimer() {
  const timerInterval = setInterval(() => {
    if (timeRemaining <= 0)  {
      clearInterval(timerInterval);
      alert("Your time is up");
      questionText.textContent = "", displayScore();
      questionText.style.color = "green";
      options.innerHTML = ""; // Clear the options
      nextButton.style.display = "none"; // Hide the "Next" button
      backButton.style.display = "none"; // Hide the "Back" button
      minutesDisplay.style.display = "none";
      secondsDisplay.style.display = "none";
      restartButton.style.display = "block"; // Show the "restart" button
      displayAnswerButton.style.display = "block"; // show the "answers" button

    } else if (( timeRemaining >= 1) && (currentQuestionIndex ===  questions.length)) {
      clearInterval(timerInterval);
      timeRemaining = 0;
      displayScore();
      backButton.style.display = "none"; // Hide the "Back" button
      restartButton.style.display = "block"; // Show the "restart" button
      displayAnswerButton.style.display = "block"; // show the "answers" button
      minutesDisplay.style.display = "none";
      secondsDisplay.style.display = "none";
    }
    
    else {
      timeRemaining--;
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
      secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
      
    }
  }, 1000);
}

function restartTimer(){
  const timerInterval = setInterval(() => {
    clearInterval(timerInterval);
    timeRemaining = 15;
    startTimer();
    currentQuestionIndex = 0;
    shuffleArray(questions);
    displayQuestion(currentQuestionIndex);
    score = 0;
    questionText.style.color = "black";
    // selectedOptions = [];
  
      restartButton.style.display = "none"; // Show the "restart" button
      displayAnswerButton.style.display = "none"; // show the "answers" button
      minutesDisplay.style.display = "inline";
      secondsDisplay.style.display = "inline";
      nextButton.style.display = "inline"; // Hide the "Next" button
      backButton.style.display = "inline"; // Hide the "Back" button
      
    
  },);
}

restartButton.addEventListener ("click", () => {
  restartTimer();
  // currentQuestionIndex = 0;
});



nextButton.addEventListener("click", () => {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  
  if (!selectedAnswer) {
    alert("Please select an answer.");
    return;
  }

  function showAnswers() {
    const correctOptions = [];
    for (let i = 0; i < questions.length; i++) {
      correctOptions.push(questions[i].answer);
    }
  
    // Display the correct options to the user
    questionText.textContent = `Correct options:\n\n${correctOptions.join("\n")}`;
    displayAnswerButton.style.display = "none";
    
  }

  displayAnswerButton.addEventListener("click", () => {
    showAnswers();
  });
  

  const currentQuestion = questions[currentQuestionIndex];
  if (selectedAnswer.value === currentQuestion.answer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex ===  questions.length -1) {
        nextButton.textContent = "FINISH";
  } else {
    nextButton.textContent = "Next";
  }

  if (currentQuestionIndex < questions.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    displayScore();
  }
});

backButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  }

  if (currentQuestionIndex ===  questions.length -1) {
    nextButton.textContent = "FINISH";
} else {
nextButton.textContent = "Next";
}

});

// displayAnswerButton.appendChild("click", () => {

// });

// function displayUserAnswer() {
//   const selectedAnswer = document.querySelector('input[name="answer"]:checked');
//   questionText.textContent = selectedAnswer.value;
// }


// displayAnswerButton.addEventListener("click", () => {
//   displayUserAnswer();
// });


function displayScore() {
    const totalQuestions = questions.length;
    const scorePercentage = (score / totalQuestions) * 100;
    const resultText = `You scored ${score} out of ${totalQuestions} (${scorePercentage.toFixed(2)}%).`;
    
    questionText.textContent = resultText;
    questionText.style.color = "green";
    options.innerHTML = ""; // Clear the options
    nextButton.style.display = "none"; // Hide the "Next" button
  }

displayQuestion(currentQuestionIndex);
startTimer();
