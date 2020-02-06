
var startButton = document.getElementById('start')
var mainContent = document.getElementById('mainContent')
var count = 0

function endGame() {
  console.log('end of game')
}

function checkQuestion(answer){
  console.log(answer)
  console.log(questions[count].choices[answer]=== questions[count].answer)
  count++
  if(count === questions.length){
    endGame()
  }
  else{

    generateQuestions()
  }
}

function generateQuestions() {
  mainContent.innerHTML= ""
  var questionTitle = document.createElement('h1')
  questionTitle.textContent = questions[count].title
  mainContent.appendChild(questionTitle)
  var questionList = document.createElement('ul')
  questionList.setAttribute('class','list-unstyled')
  for (let i = 0; i < questions[count].choices.length; i++) {
    var listItem = document.createElement('li')
    listItem.innerHTML= '<button onclick="checkQuestion('+i+')">'+questions[count].choices[i]+'</button>'
    questionList.appendChild(listItem)
  }
  mainContent.appendChild(questionList)
}

function start(){
  console.log('clicked')
  generateQuestions()
  //timer

};

startButton.addEventListener('click', start)