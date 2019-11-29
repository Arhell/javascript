function createQuiz(questions) {
    return {
        questions,
        answers: null,
    }
}

function runQuiz(quiz) {
    const { questions } = quiz;

    quiz.answers = questions.map(askQuestion);

    return quiz;
}

function logAnswers(quiz) {
    return quiz.answers.map((answer) => {
        const { question, isCorrect, answerText } = answer;
        return question.name + ': ' + (isCorrect !== null ? isCorrect : answerText);
    }).join('\n')
}

const questions = [
    createQuestion('Name', 'What\'s your name'),
    createQuestion('Company', 'What\'s your company'),
    createQuestion('Salary', 'Wanna get paid?', ['Yes', 'No'], 'No'),
]

const quiz = createQuiz(questions);
const answeredQuiz = runQuiz(quiz);




console.log(
    logAnswers(answeredQuiz)
);