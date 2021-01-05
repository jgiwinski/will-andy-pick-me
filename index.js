var questionInput = document.querySelector('.input');
var answerBtn = document.querySelector('.answer');
var clearBrn = document.querySelector('.clear');
var question = document.querySelector('.question');
var response = document.querySelector('.response');

answerBtn.addEventListener('click', displayResponse);

function randomResponse(array) {
  return Math.floor(Math.random() * array.length);
}

function displayResponse() {
  var newResponse = ballResponses[randomResponse(ballResponses)];
  var newInput = questionInput.value;

  question.innerText = newInput;
  question.innerText = newResponse
  // question.innerHTML = `<h2 class="hidden response">"${newInput}"</h2>`
  // response.innerHTML = `<h2 class="hidden response">"${newResponse}"</h2>`;
}
