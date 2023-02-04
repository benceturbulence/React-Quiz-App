// Creates an object in which the answers to each question is recorded

const answerSheetObjectCreator = (formattedQuizData) => {
    const answerSheetArray = formattedQuizData.map( e => ({question_id: e.id, chosen: '', correct_answer_id: e.correct_answer_id, category: e.category}) )
    return answerSheetArray
}

export default answerSheetObjectCreator