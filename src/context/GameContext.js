import React, { useEffect } from 'react'
import { useContext, createContext, useState } from 'react'

const GameContext = createContext()

function GameContextProvider({children}) {
    const [answerSheet, setAnswerSheet] = useState([])
    const [finished, setFinished] = useState(false)
    console.log(answerSheet)
    const addAnswerToAnswerSheet = (questionID, chosenID) => {
        setAnswerSheet(prevState => prevState.map( e => e.question_id === questionID ? {...e, chosen: chosenID} : {...e} ))
    }



  return (
    <GameContext.Provider value={{addAnswerToAnswerSheet, setAnswerSheet, answerSheet, finished, setFinished}}>
        {children}
    </GameContext.Provider>
  )
}

export {GameContext, GameContextProvider}