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

const availableQuestions = 20;

let currentQuestionIndex = 0;
let timeRemaining = 120; // 30 minutes in seconds

let score = 0;

const questions = [
{
    question: "At it's early stages of development in Nigeria, the status of English language was a __________",
    options: ["Lingua Franca", "foreign language", "second language",  "technical language"],
    answer: "Lingua Franca"
},

{
  question: "Nativization describes a phenomenon in which English language becomes_______", 
  options: ["global language",  "is spoken in new environments other than its native lands", "assumes local color", "becomes a homogeneous language"], 
  answer: "assumes local color"
},

{
  question: "The use of English language in Nigeria dates back to ______", 
  options: [ "1942", "1842", "1742", "1642"],
  answer: "1842"
}, 

{
  question: "Eka's (2000) 'progressive trilingual approach' is geared towards______", 
  option: ["solving the problems of a disunity among Nigerian speakers of English language", "multilingualism Nigeria", "lingua Franca in Nigeria", "variation in the use of English in Nigeria"],
  answer: "solving the problems of a disunity among Nigerian speakers of English language" 
}, 

{
  question: "Language according to use refers to _______", 
  options: ["Mother tongue", "register", "dialect", "phonetics"], 
  answer: "register"
}, 

{
  question: "One of these dramatist personae is the villain in Audacious:",
  options: ["Ata Edidem", "Ufia", "Ete'bong", "Chief Okon"],
  answer: "Ufia"
},

{
  question: "Now our troubles sleep no more any night but stir awake. This expression as quoted in Part-time Lovers is an example of", 
  options:["proverb", "metaphor", "personification", "allusion" ],
  answer: "metapor" 
},

{
  question: "'Xenophobia' as used in Coincidences and Polarities mearts a strong dislike or fear of", 
  options:["ghosts", "animals", "foreigners", "tribal gods" ],
  answer: "foreigners" 
},

{
  question: "'Let the wild grape that their parents ate in the wilderness put Their teeth and/Those of their children on edge.' This character in Audacious employs employs a figure known as", 
  options:["symbol", "allusion", "metaphor", "metonymy" ],
  answer: "metonymy"
},

{
  question: "Which of these is not untrue of the thematic concerns of Part- time Lovers:", 
  options:["Prayers are infinitesimally efficacious as  weapons against evil", "The weaknesses of humans as Christians are self-imposed", "Man's enemies are mostly within", "Love begets lasting pleasure when shared as part-time lovers" ],
  answer: "Prayers are infinitesimally efficacious as  weapons against evil"
},

{
  question: "One of these Widows in Fruiting in the Desert of Widowhood saved the Jewish nation during one of Nebuchadnezzar's oppressive years:", 
  options:["Ruth", "Judith", "Widow of Nain", "Deborah" ],
  answer: "Judith" 
},

{
  question: "The language situation in Nigeria encourages", 
  options:["unity", "indigenous- Lingua Franca", "disunity", "development of native languages" ],
  answer: "unity" 
},

{
question: "Which of these languages has the highest number of speakers in the world?", 
options:["Chinese", "English", "Russian", "Spanish" ],
answer: "Chinese" 
},

{
  question: "Variation may arise in the English Language usage based on the following except", 
  options:["number of speakers", "level of education", "subject matter", "region" ],
  answer: "number of speakers" 
},

{
  question: "People who speak two languages with greater fluency in one than in the other are described as_____ bilinguals.", 
  options:["coordinate", "compound", "awhordinate", "incipient" ],
  answer: "coordinate" 
},

{
  question: "One of these reflects the structural pattern for the sentence, Has the Boy told you the truth?", 
  options:["VSAOO", "VSVOO", "VCVOOD"," VSVCO" ],
  answer: "VSVOO" 
},

{
  question: "Birds sing, while monkeys charter. This is an example of___ sentense", 
  options:["compound-complex","simple", "complex", "compound" ],
  answer: "compound" 
},

{
  question: "The committee has submitted_______ reports.", 
  options:["their", "her", "his", "its" ],
  answer: "its" 
},

{
  question: "The subscription. Yours sincerely, is the acceptable style in a/an____letter", 
  options:["formal", "informal", "semi-formal", "business" ],
  answer: "formal" 
},

{
question: "In the expression; 'Murderers possess hearts of iron,' the dominant figure is that of ", 
options:["Metaphor", "personification", "sarcasm", "irony" ],
answer: "Metaphor" 
},

{
question: "The Adventurers is an indictment on Nigeria's_ ____", 
options:[ "inter-ethnic conflicts", "ethno-religious crises", "electioneering process", "social-economic crises"],
answer: "social-economic crises" 
},

{
question: "Audacious is a play by________", 
options:["Henry Ayodeji", "Effiong Ekpenyong", "Daniel Inyang Jr", "Imelda Udoh" ],
answer: "Daniel Inyang Jr" 
},

{
question: "In chapter three of Fruiting in the Desert of Widowhood tagged 'A Triple Cry: A Compounded Grief,' the focus is on the story of", 
options:["Noami", "Hagar", "Widow of Nain", "Hannah" ],
answer: "Hagar" 
},

{
question: "The major theme of Coincidences and Polarities is that______", 
options:["Coincidences are imagined concepts", "Events in life are fundamentally paradoxical", "Coincidences and polarities are eventful", "Coincidences and polarities are larger than life"],
answer: "Events in life are fundamentally paradoxical" 
},

{
question: "'You are too harsh with me. I wasn't prostituting...I was not married to him either... we were part-time lovers....' The speaker in the play is", 
options:["Cornella", "Pamela", "Ndiana", "Regina" ],
answer: "Regina" 
},

{
question: " Which of these lexemes reflects British variety of English?", 
options:[ "dust bin", "packer", "garbage can", "waste basket"],
answer: "dust bin" 
},

{
question: "Nigeria is a multilingual nation with about languages. ", 
options:["200", "250", "513", "613" ],
answer: "513" 
},

{
question: "For many a Nigerian, corruption has become a pleasant evil. The expression deploys a figure known as_____ ", 
options:["metonymy" , "synecdoche", "oxymoron", "antithesis"],
answer: "oxymoron" 
},

{
question: " In minutes writing, the statement- I am in school now and I will come here tomorrow -will be reported thus, He'said", 
options:[ "He was in school then and he will go there the following day.", "He was in school then and he will come there the following day.", "He was in school, then and he will come there the previous day.", "He was in school then and he would go there the following day"],
answer: "He was in school then and he would go there the following day"
},

{
question: " The symbol 'o' is used in writing to mean", 
options:["male", "leads to", "because", "female" ],
answer: "female" 
},

{
question: "What you said last week in a meeting. This expression is a", 
options: ["Fragment", "run-on sentence", "split construction", "comma splice"],
answer: "Fragment" 
},

{
question: "Which is NOT true of reasoning? ", 
options:["It is goal-oriented", "It is systematic", "It is directionless", "It is logical" ],
answer: "It is directionless" 
},

{
question: " A: Do you mean you have failed the exam? B: What do you expect after my last disagreement with my lecturer? The type of fallacy in the above arguments is termed", 
options:["hasty generalisation", "begging the question", "false cause", "argument from ignorance" ],
answer: "begging the question" 
},

{
question: " I would rather she______the letter next week.", 
options:["write", "wirte", "wrote", "should write" ],
answer: "wrote" 
},

{
question: " Recently, hundreds of candidates have been admitted_____University of Uyo.", 
options:["in", "to", "into", "at" ],
answer: "to" 
},

{
question: "Affiong and Effiong met_____in a bus going to Abuja ", 
options:["themselves", "one another", "each other", "theirselves" ],
answer: "each other" 
},

{
question: "Yesterday in the hall, Uche said that______ his wrist watch ", 
options:["he had forgot", "he had misplaced", "he has lost", "he has misplaced" ],
answer: "he had misplaced" 
},

{
question: "If Adamu arrived late, everyone_____him. ", 
options:["would have blamed", "would be blaming", "would blame", "will blame" ],
answer: "would blame" 
},

{
question: "_____ will attend the party at 10 am ", 
options:["I and you", "You and I", "Myself and you", "You and me" ],
answer: "You and I" 
},

{
question: " The______ is mainly responsible for students' matters", 
options:[ "Students Affairs Division", "Students' Affairs Division", "Students Affairs' Division", "Students' Affairs' Division"],
answer: "Student's Affairs Division" 
},

{
question: "In an assay, a sentence definition comprises___ and ___ ", 
options:["genus and difference", "differentia and gehus", "difference and genus", "genus and differentia"
 ],
answer: "genus and differentia" 
},

{
question: "An argument can NOT be said to be sound if _____ ", 
options:["only the premises are true", "it is true and valid", "the facts accord with realities in the world", "it logically flows from premises to conclusion" ],
answer: "only the premises are true" 
},

{
question: "Straw man argument is termed______ ", 
options:["Argumentum ad veracundiam", "Argumentum ad baculum", "Argumentum ad hominem", "Argumentum ad populum" ],
answer: "Argumentum ad hominem" 
},

{
question: " Which is the proper subscription in a business letter?", 
options:["Yours Faithfully", "Yours faithfully", "Your's faithfully", "Yours' faithfully" ],
answer: "Yours faithfully" 
},

{
question: " Which of these sentences aligns with, SVCA structure?", 
options:[ "I admire brilliant students in my class", "Jack likes eating snacks every morning", "Nigeria is a country in West Africa", "Uche sings songs during worship"],
answer: "I admire brilliant students in my class"
},

{
question: "One of these dramatist personae is the villain in Audacious ", 
options:["Udo Nsien", "Ufal", "EteObong", "Chief Okon" ],
answer: "Udo Nsien" 
},

{
question: "In Fruiting in the Desert of Widowhood, Wilkinson offers the following secrets of bearing fruits except ", 
options:["Prayer", "Discipline", "Pruning", "Abiding" ],
answer: "Pruning" 
},

{
question: "'Now our troubles sleep no more any night but stir awake.' This expression as quoted in Part-time Lovers is an example of ", 
options:["proverb", "metaphor", "personification", "allusion" ],
answer: "personification" 
},

{
question: " The choice is between what is evanescent and what is concrete; between what is trivial and what is worthwhile. The synonym to the underlined word as used in The Adventurers is ____", 
options:["fugitive", "transient", "permanent", "transitory" ],
answer: "transient" 
},

{
question: "Ikulebo in The Adventurers is a ____ ", 
options:["drummer", "Kingmaker", "traveller", "member of Aragba Ruling House" ],
answer: "drummer" 
},

{
question: " English Language is superior to the following except", 
options:["Ibibio", "Chinese",  "French", "None of the above" ],
answer: "None of the above" 
},

{
question: "People who speak two languages with greater fluency in one than in the other are described as ______bilinguals. ", 
options:["co-ordinate", "compound", "subordinate", "incipient"],
answer: "subordinate" 
},

{
question: "Birds sing, while monkeys charter. This is an example of ______ sentence ", 
options:["simple", "complex", "compound", "compound-complex" ],
answer: "complex" 
},

{
question: " In the expression, 'Murderers possess hearts of iron,' the dominant figure is that of", 
options:["irony", "metaphor", "personification", "sarcasm" ],
answer: "metaphor" 
},

{
question: "The Adventurers is an indictment on Nigeria's ______ ", 
options:[ "inter-ethnic conflicts",  "ethno-religious crises", "electioneering process", "social-economic crises"],
answer: "social-economic crises" 
},

{
question: " A rapid glance through a text for the purpose of getting a summary of what the text is all about is, ______", 
options:["normal reading", "skimming", "scanning", "fast reading" ],
answer: "skimming" 
},

{
question: " A process of recognizing printed symbols and associating them with corresponding meanings is________", 
options:[ "writing", "reading", "speaking", "listening"],
answer: "reading" 
},

{
question: "One of these is not a quality of a good note: ", 
options:["originality", "brevity", "precision", "verbosity" ],
answer: "verbosity" 
},

{
question: " Impediments to good note-taking include all except______", 
options:["lack of speed", "inability to listen well", "loss of key points", "good handwriting" ],
answer: "good handwriting" 
},

{
question: "Has the time keeper_______the bell? ", 
options:[ "ring", "rang", "rung", "rings"],
answer: "rung" 
},

{
question: " Ten percent of Nigerians____NIN", 
options:[ "has",  "have", "are having", "is having"],
answer: "have" 
},

{
question: "Neither the members of the National Assembly nor the President_______above the law. ", 
options:[ "are", "is", "were", "was"],
answer: "are" 
},

{
question: "There are a total of______consonant sounds in the English language. ", 
options:[ "20", "44", "24", "26"],
answer: "24" 
},

{
question: " Non-segmental features of sounds include all except", 
options:["accentuation", "intonation", "phoneme",  "rhythm" ],
answer: "phoneme" 
},

{
question: " Listening involves all except_______", 
options:["involuntary activity", "interest", "concentration", "language competence" ],
answer: "involuntary activity" 
},

{
question: "Nonetheless is a/an________ message cue. ", 
options:[ "explicit", "concessional", "implicit", "enumeration"],
answer: "explicit" 
},

{
question: " In the life of a student, speaking constitutes____% of the required study skills.", 
options:["16", "53", "14", "17" ],
answer: "14" 
},

{
question: " Aimless repetition of what has just been read is termed_______", 
options:["head movement", "excessive eye fixation", "regression", "sub-vocalisation" ],
answer: "sub-vocalisation" 
},

{
question: " In 353R, the last R stands for_____", 
options:[ "Recite", "Review", "Revise", "Reflect"],
answer: "Review" 
},

{
question: "The Latin root ante means ", 
options:["before", "against", "Catter", "between" ],
answer: "before" 
},

{
question: " Words or utterances which have been overused are termed", 
options:["homonyms", "clichés", "colloquialisms", "Djargons" ], 
answer: "clichés" 
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
  questionNumber.style.color = "#84106c";
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
    timeRemaining = 360;
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
    for (let i = 0; i < availableQuestions % questions.length; i++) {
      correctOptions.push(questions[i].answer);
    }
  
    // Display the correct options to the user
    questionText.textContent = `${correctOptions}`;
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

  const showError = () => {
    alert(
      "These questions are not available at the moment, Please check back later."
    );
  }

  

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
        usernameDisplay.style.color = "#84106c";
        usernameDisplay.style.fontFamily = "monospace";
        usernameDisplay.style.fontSize = "1.25rem";

        loggedInUsername.textContent = `Have fun, ${username}`;
        loggedInUsername.style.color = "#84106c";
        loggedInUsername.style.fontFamily = "monospace";
        loggedInUsername.style.fontSize = "1.25rem";

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

 