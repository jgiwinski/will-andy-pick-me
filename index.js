var questionInput = document.querySelector('.input');
var answerBtn = document.querySelector('.answer');
var clearBrn = document.querySelector('.clear');
var question = document.querySelector('.question');
var response = document.querySelector('.response');
var qAndA = document.querySelector('.eightball-decision');
var eightball = document.querySelector('.eightball');

answerBtn.addEventListener('click', displayResponse);

function randomResponse(array) {
  return Math.floor(Math.random() * array.length);
}

function displayResponse() {
  var newResponse = ballResponses[randomResponse(ballResponses)];
  var newInput = questionInput.value;

  qAndA.classList.remove('hidden');
  eightball.classList.add('hidden');

  question.innerText = newInput;
  response.innerText = newResponse;
}

function clearInput() {
  questionInput.value = '';
}
