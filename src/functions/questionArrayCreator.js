import {nanoid} from 'nanoid'
const questionArrayCreator = (questionArray) => {
    return questionArray.map(e => questionObjectCreator(e))   
}

// It transforms the questions retrieved into question Objects that will be used

const questionObjectCreator = (question) => {
    const incorrectAnswerArray = question.incorrect_answers.map(e => ({id: nanoid(), answer: e, isChosen: false, isCorrect: false}))
    const correctAnswerObj = ({id: nanoid(), answer: question.correct_answer, isChosen: false, isCorrect: true})
    return ({id: nanoid(), category: question.category, question: question.question, answerArray: [...incorrectAnswerArray, correctAnswerObj], correct_answer_id: correctAnswerObj.id})
}

export default questionArrayCreator