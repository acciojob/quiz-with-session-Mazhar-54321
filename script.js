//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is the highest mountain in the world?",
      choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
      answer: "Everest",
    },
    {
      question: "What is the largest country by area?",
      choices: ["Russia", "China", "Canada", "United States"],
      answer: "Russia",
    },
    {
      question: "Which is the largest planet in our solar system?",
      choices: ["Earth", "Jupiter", "Mars"],
      answer: "Jupiter",
    },
    {
      question: "What is the capital of Canada?",
      choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
      answer: "Ottawa",
    },
  ];
 let userAnswers = ['','','','',''] 
  // Display the quiz questions and choices
  function renderQuestions() {
    console.log(userAnswers,"user---")
    let quizDiv = document.getElementById("questions")	
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const questionElement = document.createElement("div");
      const questionText = document.createTextNode(question.question);
      questionElement.appendChild(questionText);
      for (let j = 0; j < question.choices.length; j++) {
        const choice = question.choices[j];
        const choiceElement = document.createElement("input");
        choiceElement.setAttribute("type", "radio");
        choiceElement.setAttribute("name", `question-${i}`);
        choiceElement.setAttribute("value", choice);
        choiceElement.addEventListener("change",function(event){
            console.log(event.target.value,questions[i]);
            userAnswers[i]=event.target.value;
            window.sessionStorage.setItem("progress",JSON.stringify(userAnswers))
        })
        if (userAnswers[i] === choice) {
          choiceElement.setAttribute("checked", true);
        }
        const choiceText = document.createTextNode(choice);
        questionElement.appendChild(choiceElement);
        questionElement.appendChild(choiceText);
      }
      quizDiv.appendChild(questionElement);
        //quizDiv.appendChild(questionsElement)
    }
  }

  function calculateScore(){
    let score =0;
    userAnswers.forEach((el,index)=>{
        if(el === questions[index]["answer"]){
            score++;
        }
    })
    window.localStorage.setItem("score",score);
    var scoreDiv =document.querySelector("#score");
    scoreDiv.textContent=`Your score is ${score} out of 5.`
  }
 
  document.addEventListener("DOMContentLoaded",function(){
    let progress =window.sessionStorage.getItem("progress");
    let score = window.localStorage.getItem("score");
    console.log(progress,"progress==");
    if(progress){
        userAnswers =JSON.parse(progress)
    }
    if(score){
    var scoreDiv =document.querySelector("#score");
    scoreDiv.textContent=`Your score is ${score} out of 5.`
    }
    renderQuestions();
  })
  