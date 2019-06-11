function saveAnswer(question, answerText) {
  const { correctOption } = question;

  const isCorrect = correctOption === null ? null : correctOption === answerText;
  return { question, answerText, isCorrect }
}

function askQuestion(question) {
  let text = question.text;

  if(question.options) {
    text += '\n';
    text = question.options.map(opt => '- ' + opt).join('\n')
  }

  const answerText = prompt(text);

  return saveAnswer(question, answerText);
}