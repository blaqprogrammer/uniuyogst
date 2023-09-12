// Array of questions with options
const questions = [
    {
      question: "Question 1",
      options: ["Option A", "Option B", "Option C"],
      answer: 1, // Index of the correct option
    },
    {
      question: "Question 2",
      options: ["Option A", "Option B", "Option C"],
      answer: 2, // Index of the correct option
    },
    // Add more questions as needed...
  ];
  
  let currentQuestionIndex = 0;
  let selectedOptions = [];
  
  // Function to display the current question and options
  function displayQuestion() {
    const questionsSection = document.getElementById("questions-section");
    questionsSection.innerHTML = "";
  
    const question = document.createElement("h2");
    question.textContent = questions[currentQuestionIndex].question;
    questionsSection.appendChild(question);
  
    const options = questions[currentQuestionIndex].options;
    for (let i = 0; i < options.length; i++) {
      const option = document.createElement("input");
      option.type = "radio";
      option.name = "option";
      option.value = i;
      option.addEventListener("change", handleOptionSelection);
      questionsSection.appendChild(option);
  
      const label = document.createElement("label");
      label.textContent = options[i];
      questionsSection.appendChild(label);
  
      questionsSection.appendChild(document.createElement("br"));
    }
  
    updateControls();
  }
  
  // Function to handle option selection
  function handleOptionSelection(event) {
    const selectedOption = parseInt(event.target.value);
    selectedOptions[currentQuestionIndex] = selectedOption;
  
    updateControls();
  }
  
  // Function to update the state of controls based on the current question
  function updateControls() {
    const backBtn = document.getElementById("back-btn");
    backBtn.disabled = (currentQuestionIndex === 0);
  
    const restartBtn = document.getElementById("restart-btn");
    restartBtn.addEventListener("click", restart);
  
    const showAnswersBtn = document.getElementById("show-answers-btn");
    showAnswersBtn.addEventListener("click", showAnswers);
  
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", submit);
  
    const timer = document.getElementById("timer");
    // Add timer functionality here if needed
  
    // Enable/disable controls based on the current question
    if (selectedOptions[currentQuestionIndex]) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }
  
  // Function to navigate to the previous question
  function goBack() {
    currentQuestionIndex--;
  
    displayQuestion();
  }
  
  // Function to restart the CBT
  function restart() {
    currentQuestionIndex = 0;
    selectedOptions = [];
  
    displayQuestion();
  }
  
  // Function to show the correct answers
  function showAnswers() {
    const correctOptions = [];
    for (let i = 0; i < questions.length; i++) {
      correctOptions.push(questions[i].answer);
    }
  
    // Display the correct options to the user
    alert(`Correct options:\n\n${correctOptions.join(", ")}`);
  }
  
  // Function to submit the CBT
  function submit() {
    // Perform operations on submitted data or navigate to results page
    // Add your desired functionality here
  }
  
  // Event listener for the back button
  const backBtn = document.getElementById("back-btn");
  backBtn.addEventListener("click", goBack);
  
  // Initialize the CBT
  displayQuestion();
  