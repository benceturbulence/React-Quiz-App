import React, { useEffect, useState, useContext } from 'react'
import QuestionComponent from '../components/QuestionComponent'
import fetchQuestions from '../functions/fetchQuestions'
import questionArrayCreator from '../functions/questionArrayCreator'
import answerSheetObjectCreator from '../functions/answerSheetObjectCreator'
import { GameContext } from '../context/GameContext'
import Confetti from 'react-confetti'
import LoadingComponent from '../components/LoadingComponent'
import { useNavigate } from 'react-router-dom'

function QuizPage({fetchUrl}) {
  const {setFinished, finished} = useContext(GameContext)
  const {setAnswerSheet, answerSheet} = useContext(GameContext)
  
  const [loading, setLoading] = useState(false)
  const [quizData, setQuizData] = useState([])
  const [confetti, setConfetti] = useState(false)

  const navigate = useNavigate()

  const resetGame = () => {
    setFinished(false)
    setConfetti(false)
  }

  const createQuizData = (data) => {
    const formattedQuizData = questionArrayCreator(data.results)
      const answerSheet = answerSheetObjectCreator(formattedQuizData)
      setAnswerSheet(answerSheet)
      setQuizData(formattedQuizData)
  }

  const playAgain = () => {
    setLoading(true)
    resetGame()
    fetchQuestions(fetchUrl).then( res => createQuizData(res))
    setTimeout(()=>setLoading(false), 1000)
  }

  useEffect(() => {
    setLoading(true)
    fetchQuestions(fetchUrl).then( res => createQuizData(res))
    setTimeout(()=>setLoading(false), 1000)
  },[])


  const evaluateAnswers = () => {
    let correctAnswers = 0
    answerSheet.forEach(question => {
      if (question.chosen === question.correct_answer_id){
        console.log('Correct')
        correctAnswers +=1
      }
      else {
        console.log('Incorrect')
      }

    });
    correctAnswers > quizData.length > .7 && setConfetti(true)
    return correctAnswers
  }



  return (
    <div className='container quizComponent'>  
    {loading ? <LoadingComponent /> :
    <>
    {confetti && <Confetti />}
          {quizData.map(e => <QuestionComponent key={e.id} data={e}/>)}
    
    <div className='btn-score-container'>
      {finished ? (
        <>
          <button className='btn' onClick={()=> {
            resetGame()
            navigate('/')}
          }>New game</button>
          <p className='result'>You scored  {evaluateAnswers()} / {quizData.length} correct aswers</p>
          <button className='btn new-game' onClick={() => {playAgain()}}>Play again</button>
        </>
        ) : 
        <button 
          className='btn' 
          onClick={()=>{
            setFinished(true)
            evaluateAnswers()
          }}>Finish
        </button>
       }
    </div>
    </>
    }
    </div>
  )
}

export default QuizPage