import React, {useContext, useState} from 'react'
import { GameContext } from '../context/GameContext'
import { escapeHtml } from '../functions/escapeHtml'
function QuestionComponent({data}) {
 
    const {addAnswerToAnswerSheet, finished} = useContext(GameContext)
    const {question, answerArray} = data  

    const [answerStateArray, setAnsweStateArray] = useState(answerArray)

    const chooseAnser = (questionID, answerID ) => {
        addAnswerToAnswerSheet(questionID, answerID)
        setAnsweStateArray(prevState => prevState.map(e => e.id === answerID ? {...e, isChosen: true} : {...e, isChosen: false}))
    }




    return (
    <div className={finished ? 'questionComponent finished' : 'questionComponent'}>
        <h3 className='question'>
        {escapeHtml(question)}
        </h3>
        <div className='answer-container'>
            {answerStateArray.map(
                e => 
                <button 
                    key={e.id}
                    onClick={() => {!finished && chooseAnser(data.id, e.id)}} 
                    className={ 
                        e.isChosen && e.isCorrect ? 'answer-option correct chosen' : 
                        e.isCorrect ? 'answer-option correct' : 
                        e.isChosen ? 'answer-option chosen' : 
                        'answer-option'}
                    >
                    {escapeHtml(e.answer)}
                </button>)}
        </div>      
    </div>
  )
}

export default QuestionComponent