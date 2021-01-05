var questionInput = document.querySelector('.input');
var answerBtn = document.querySelector('.answer');
var clearBtn = document.querySelector('.clear');
var question = document.querySelector('.question');
var response = document.querySelector('.response');
var qAndA = document.querySelector('.eightball-decision');
var eightball = document.querySelector('.eightball');

answerBtn.addEventListener('click', displayResponse);
clearBtn.addEventListener('click', clearAll);

function randomResponse(array) {
  return Math.floor(Math.random() * array.length);
}

function displayResponse() {
  var newResponse = ballResponses[randomResponse(ballResponses)];
  var newInput = questionInput.value;

  if(newInput === ""){
    alert("uh oh, looks like you need to put in a question.")
    reloadPage(); 
  }

  qAndA.classList.remove('hidden');
  eightball.classList.add('hidden');

  question.innerText = newInput;
  response.innerText = newResponse;
  clearInput()
}

function reloadPage() {
  location.reload();
}

function clearInput() {
  questionInput.value = '';
}

function clearAll() {
  qAndA.classList.add('hidden');
  eightball.classList.remove('hidden');
}
