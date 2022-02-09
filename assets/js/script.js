const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    /** shuffledQuestions implement a randow array. It generate a number that is
     *  either below or above zero, which sort data in one direction or another. 
     * Using Math.randon, we can subtract it from .5 giving the array in one direaction 
     * or another 50% times, making the array fully randomized
     * */
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("button");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("incorrect");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("incorrect");
}

const questions = [{
        question: 'What is the capital of Sweden?',
        answers: [{
                text: 'Stockholm',
                correct: true
            },
            {
                text: 'Lisbon',
                correct: false
            }
        ]
    },
    {
        question: 'What is the capital of Finland?',
        answers: [{
                text: 'Helsink',
                correct: true
            },
            {
                text: 'Stockholm',
                correct: false
            }
        ]
    },
    {
        question: 'What is the capital of Norway?',
        answers: [{
                text: 'Oslo',
                correct: true
            },
            {
                text: 'Helsink',
                correct: false
            }
        ]
    },

    {
        question: 'What is the capital of Denmark?',
        answers: [{
                text: 'Copenhagen',
                correct: true
            },
            {
                text: 'Oslo',
                correct: false
            }
        ]
    }
];