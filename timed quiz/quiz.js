var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var myQuestions = [
	{
		question: "What i like to have most?",
		answers: {
			a: 'Tea',
			b: 'Coffee',
            c: 'Juice',
            d: 'Shake'
		},
		correctAnswer: 'a'
    },
    {
		question: "What is my pet name ?",
		answers: {
			a: 'Tanu',
			b: 'kannu',
            c: 'kanu',
            d: 'kuku'
		},
		correctAnswer: 'c'
    },
    {
		question: "Which is my birth month?",
		answers: {
			a: 'January',
			b: 'March',
            c: 'December',
            d: 'June'
		},
		correctAnswer: 'c'
	},
	{
		question: "Which one is my favourite colour?",
		answers: {
			a: 'Blue',
			b: 'Black',
            c: 'Red',
            d: 'Orange'
		},
		correctAnswer: 'b'
    },
    {
		question: "What type of movie i like to watch?",
		answers: {
			a: 'Sci-fi',
			b: 'Comedy',
            c: 'Horror',
            d: 'Action'
		},
		correctAnswer: 'b'
    },
    {
		question: "I am good at ?",
		answers: {
			a: 'Dancing',
			b: 'Sketching',
            c: 'Swimming',
            d: 'Time wasting'
		},
		correctAnswer: 'd'
	}
    
];
var total_seconds = 20;
var rem_minutes = parseInt(total_seconds/60);
var rem_seconds = parseInt(total_seconds%60);

function checkTime()
{
    document.getElementById("quizTime").innerHTML='Time left : '+rem_minutes+' Min '+rem_seconds+' Sec ';
    if(total_seconds<=0){
		//show result when time is over
		alert("time's up");
	   showResults()	
    }
    else{
        total_seconds=total_seconds - 1;
        rem_minutes = parseInt(total_seconds/60);
        rem_seconds = parseInt(total_seconds%60);
		setTimeout("checkTime()",1000);
		
    }
}
//start timer
setTimeout("checkTime()",1000);

//definition of Quiz builder function
function buildQuiz(){
	// variable to store the HTML output
	const output = [];
  
	// for each question...
	myQuestions.forEach(
	  (currentQuestion, questionNumber) => {
  
		// variable to store the list of possible answers
		const answers = [];
  
		// and for each available answer...
		for(letter in currentQuestion.answers){
  
		  // ...add an HTML radio button
		  answers.push(
			`<label>
			  <input type="radio" name="question${questionNumber}" value="${letter}">
			  ${letter} :
			  ${currentQuestion.answers[letter]}
			</label>`
		  );
		}
  
		// add this question and its answers to the output
		output.push(
		  `<div class="question"> ${currentQuestion.question} </div>
		  <div class="answers"> ${answers.join('')} </div>`
		);
	  }
	);
  
	// finally combine our output list into one string of HTML and put it on the page
	quizContainer.innerHTML = output.join('');
  }

//function to calculate and show result
  function showResults(){

	// gather answer containers from our quiz
	const answerContainers = quizContainer.querySelectorAll('.answers');
  
	// keep track of user's answers
	let numCorrect = 0;
  
	// for each question...
	myQuestions.forEach( (currentQuestion, questionNumber) => {
  
	  // find selected answer
	  const answerContainer = answerContainers[questionNumber];
	  const selector = `input[name=question${questionNumber}]:checked`;
	  const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
	  // if answer is correct
	  if(userAnswer === currentQuestion.correctAnswer){
		// add to the number of correct answers
		numCorrect++;
  
		//color the answers green
		answerContainers[questionNumber].style.color = 'green';
	  }
	  // if answer is wrong or blank
	  else{
		// color the answers red
	    answerContainers[questionNumber].style.color = 'red';
	  }
	});
  
	// show number of correct answers out of total
	resultsContainer.innerHTML = `Your score is : ${numCorrect} out of ${myQuestions.length}`;
  }
  //build quiz
  buildQuiz();
  //show result on submit
  submitButton.addEventListener('click', showResults);