function createQuestion(name, text, options = null, correctOption = null) {

  return { 
    text,
    name,
    options,
    correctOption,
   };
}