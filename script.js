const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const answerText = document.getElementById("answerText");
const options = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const backButton = document.getElementById("backButton");
const startButton = document.getElementById("startButton");
const gstOneButton = document.getElementById("gstOneButton");
const gstTwoButton = document.getElementById("gstTwoButton");
const gstThreeButton = document.getElementById("gstThreeButton");
const gstFourButton = document.getElementById("gstFourButton");
const gstFiveButton = document.getElementById("gstFiveButton");
const gstSixButton = document.getElementById("gstSixButton");
const gstSevenButton = document.getElementById("gstSevenButton");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const alertText = document.getElementById("alertText");
// const alertTextContent = document.createTextNode("YOUR TIME IS UP");
const userAnswer = {}; // Store user answers

const availableQuestions = 6;

let currentQuestionIndex = 0;
let timeRemaining = 60; // 30 minutes in seconds

let score = 0;

const questions = [
  {
    question: "Philosophy was first defined by?",
    options: ["Charles Dewey", "Ivan Nelson", "Charles Dorsey", "Isaac Newton"],
    answer: "Charles Dewey"
  },
  {
    question: "Who said 'He who does not know, does not know'",
    options: ["Emmanuel", "Bassey", "Kaern", "Samson"],
    answer: "Samson"
  },
  {
    question: "What does NON SEQUITOR mean",
    options: ["Not Ahead", " not compartible", "Does not follow", "not thesame"],
    answer: "Does not follow"
  },
  {
    question: "Philosopy has 3 branches",
    options: ["True", "False", "4 Braches", "None of the Above"],
    answer: "False"
  },
  {
    question: "The term Philosophy is gotten from the greek words",
    options: ["Phelo and Sophia", "Pilo and Sophia", "Philo and Sophia", "Philo and Sophy"],
    answer: "Philo and Sophia"
  },
  {
    question: "According to philosophy, how was the evolution of the earth?",
    options: ["The Loud Bang Theory", "Evolved from Animals", "Chemical Mixture", "All of the Above"],
    answer: "The Loud Bang Theory"
  },
  {
    question: "Philosophy can be defined as?",
    options: ["Study of God", "Study of Wisdom", "Search for Wisdom", "Quest for wisdom"],
    answer: "Search for Wisdom"
  },
  {
    question: "Philo and Sophia means?",
    options: ["Search and Wisdom", "Study and Wisdom", "Wisdom and Knowledge", "Search for Knowledge"],
    answer: "Search for Knowledge"
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




function displayQuestion(index) {

      
    
  
  const question = questions[index];
  questionNumber.textContent = `Question ${index + 1}`;
  questionNumber.style.marginBottom = "0px";
  questionNumber.style.color = "green";
  questionText.textContent = `${question.question}`;
  questionText.style.marginTop = "0px";
  options.innerHTML = "";


  question.options.forEach((option, idx) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.style.width = "23px"; // Set the width to 30 pixels
    input.style.height = "23px"; // Set the height to 30 pixels
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
      questionNumber.textContent = "";
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
      questionNumber.textContent = "";
    } else if (currentQuestionIndex ===  availableQuestions && timeRemaining >= 0) {
      clearInterval(timerInterval);
      timeRemaining = 0;
      displayScore();
      backButton.style.display = "none"; // Hide the "Back" button
      restartButton.style.display = "block"; // Show the "restart" button
      displayAnswerButton.style.display = "block"; // show the "answers" button
      minutesDisplay.style.display = "none";
      secondsDisplay.style.display = "none";
      questionNumber.textContent = "";
    }
    
    else {
      timeRemaining--;
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
      secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
      backButton.style.display = "none"; // Hide the "Back" button
      
    }
  }, 1000);
}

function restartTimer(){
  const timerInterval = setInterval(() => {
    clearInterval(timerInterval);
    timeRemaining = 60;
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
      backButton.style.display = "none"; // Hide the "Back" button
      
    
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

  if (currentQuestionIndex ===  availableQuestions % questions.length -1) {
        nextButton.textContent = "THIS IS YOUR LAST QUESTION";
  } else {
    nextButton.textContent = "GO TO NEXT QUESTION";
  }

  if (currentQuestionIndex < availableQuestions % questions.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    displayScore();
  }
});

backButton.addEventListener("click", () => {
  

  if (currentQuestionIndex ===  questions.length -1) {
    nextButton.textContent = "THIS IS YOUR LAST QUESTION";
} else {
nextButton.textContent = "GO TO NEXT QUESTION";
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
    const totalQuestions = availableQuestions % questions.length;
    const scorePercentage = (score / totalQuestions) * 100;
    const resultText = `${username}, You scored ${score} out of ${totalQuestions} (${scorePercentage.toFixed(2)}%).`;
    
    
    questionText.textContent = resultText;
    questionText.style.color = "green";
    options.innerHTML = ""; // Clear the options
    nextButton.style.display = "none"; // Hide the "Next" button
  }

  startButton.addEventListener("click", () => {
    displayQuestion(currentQuestionIndex);
    restartTimer();
    
    startButton.style.display = "none";
    nextButton.style.display = "inline"; // Hide the "Next" button
    backButton.style.display = "none"; // Hide the "Back" button
    minutesDisplay.style.display = "inline";
      secondsDisplay.style.display = "inline";
      // Call the function to assign question numbers


      
  });

  gstOneButton.addEventListener("click", () => {
    const topPart = document.getElementById("top");
    const bottomPart = document.getElementById("bottom");
    topPart.style.display = "none";
    bottomPart.style.display = "block";
    nextButton.style.display = "none";
    backButton.style.display = "none";
    questionText.textContent = "";
      options.innerHTML = ""; // Clear the options
      minutesDisplay.style.display = "none";
      secondsDisplay.style.display = "none";
      restartButton.style.display = "none";
        displayAnswerButton.style.display = "none";
  
    
  });

  gstTwoButton.addEventListener("click", () => {
    const topPart = document.getElementById("top");
    const bottomPart = document.getElementById("bottom");
    topPart.style.display = "none";
    bottomPart.style.display = "block";
    nextButton.style.display = "none";
    backButton.style.display = "none";
    questionText.textContent = "";
      options.innerHTML = ""; // Clear the options
      minutesDisplay.style.display = "none";
      secondsDisplay.style.display = "none";
      restartButton.style.display = "none";
        displayAnswerButton.style.display = "none";
    
  });

  gstThreeButton.addEventListener("click", () => {
    const topPart = document.getElementById("top");
    const bottomPart = document.getElementById("bottom");
    topPart.style.display = "none";
    bottomPart.style.display = "block";
    nextButton.style.display = "none";
    backButton.style.display = "none";
    questionText.textContent = "";
      options.innerHTML = ""; // Clear the options
      minutesDisplay.style.display = "none";
      secondsDisplay.style.display = "none";
      restartButton.style.display = "none";
        displayAnswerButton.style.display = "none";
  
    
  });

  gstFourButton.addEventListener("click", () => {
    const topPart = document.getElementById("top");
    const bottomPart = document.getElementById("bottom");
    topPart.style.display = "none";
    bottomPart.style.display = "block";
    nextButton.style.display = "none";
    backButton.style.display = "none";
    questionText.textContent = "";
      options.innerHTML = ""; // Clear the options
      minutesDisplay.style.display = "none";
      secondsDisplay.style.display = "none";
      restartButton.style.display = "none";
        displayAnswerButton.style.display = "none";
  
    
  });

  gstFiveButton.addEventListener("click", () => {
    const topPart = document.getElementById("top");
    const bottomPart = document.getElementById("bottom");
    topPart.style.display = "none";
    bottomPart.style.display = "block";
    nextButton.style.display = "none";
    backButton.style.display = "none";
    questionText.textContent = "";
      options.innerHTML = ""; // Clear the options
      minutesDisplay.style.display = "none";
      secondsDisplay.style.display = "none";
      restartButton.style.display = "none";
        displayAnswerButton.style.display = "none";
  
    
  });

  gstSixButton.addEventListener("click", () => {
    const topPart = document.getElementById("top");
    const bottomPart = document.getElementById("bottom");
    topPart.style.display = "none";
    bottomPart.style.display = "block";
    nextButton.style.display = "none";
    backButton.style.display = "none";
    questionText.textContent = "";
      options.innerHTML = ""; // Clear the options
      minutesDisplay.style.display = "none";
      secondsDisplay.style.display = "none";
      restartButton.style.display = "none";
        displayAnswerButton.style.display = "none";
    
  });

  gstSevenButton.addEventListener("click", () => {
    const topPart = document.getElementById("top");
    const bottomPart = document.getElementById("bottom");
    topPart.style.display = "none";
    bottomPart.style.display = "block";
    nextButton.style.display = "none";
    backButton.style.display = "none";
    questionText.textContent = "";
      options.innerHTML = ""; // Clear the options
      minutesDisplay.style.display = "none";
      secondsDisplay.style.display = "none";
      restartButton.style.display = "none";
        displayAnswerButton.style.display = "none"; 
  
    
  });

 function getBack() {
    const timerInterval = setInterval(() => {
        clearInterval(timerInterval);
        timeRemaining = 0;
        startButton.style.display = "block";
        restartButton.style.display = "none";
        displayAnswerButton.style.display = "none";
        

    const topPart = document.getElementById("top");
    const bottomPart = document.getElementById("bottom");
    topPart.style.display = "block";
    bottomPart.style.display = "none";
        
    },);
  }


  goBack.addEventListener("click", () => { 
    getBack();
  });


// const image = document.querySelector("img"),
// input = document.querySelector("input");

// input = addEventListener("change", () => {
//   image.src = URL.createObjectURL(input.files[0]);
// });

//LOG IN AND SIGN UP FUNCTION

/**function for hide password */

function hidePassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
  x.type = "text";
  } else {
  x.type = "password";
  }
  }
  
  /**Function for validate password */
  
  function validate_password() {
  
  var pass = document.getElementById('pass').value;
  var confirm_pass = document.getElementById('confirm_pass').value;
  if (pass != confirm_pass) {
   document.getElementById('wrong_pass_alert').style.color = 'red';
   document.getElementById('wrong_pass_alert').innerHTML
       = '☒ Use same password';
   document.getElementById('create').disabled = true;
   document.getElementById('create').style.opacity = (0.4);
  } else {
   document.getElementById('wrong_pass_alert').style.color = 'green';
   document.getElementById('wrong_pass_alert').innerHTML =
       '🗹 Password Matched';
   document.getElementById('create').disabled = false;
   document.getElementById('create').style.opacity = (1);
  }
  }
  
  /**Function for toggling between Login and Sign up */
  function clickLogIn() {
  document.getElementById("logIn").style.display = "block";
  document.getElementById("signIn").style.display = "none";
  }
  function clickSignIn() {
      document.getElementById("logIn").style.display = "none";
      document.getElementById("signIn").style.display = "block";
      }

      //image upload script

  
  
      // Function to get URL parameter by name
      function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get the username from the URL
    const username = getParameterByName('username');

    // Display the username on the home page
    const usernameDisplay = document.getElementById('username-display');
    if (username) {
        usernameDisplay.textContent = `Welcome, ${username}!`;

        loggedInUsername.textContent = `${username}!`;

    } else {
        usernameDisplay.textContent = 'No username provided.';
    }

    

    
    
    //log out
    // Logout function
    function logout() {
      // You can add code here to clear the user's session or perform other logout actions.
      
      // For this example, we'll simulate a logout by redirecting to the login page.
      window.location.href = 'index.html';
  }

  // Add a click event listener to the logout button
  const logoutButton = document.getElementById('logout');
  if (logoutButton) {
      logoutButton.addEventListener('click', logout);
  }

 