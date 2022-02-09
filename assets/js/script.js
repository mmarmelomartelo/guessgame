const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
startButton.addEventListener('click', startGame)

function startGame() {
    console.log("I am workin!");
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
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}
//function showQuestion(question) {}


//function resetState() {}


//function selectAnswer {}

let shuffledQuestions, currentQuestionIndex


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
}]