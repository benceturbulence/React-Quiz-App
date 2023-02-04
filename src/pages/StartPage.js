import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function StartPage({setFetchUrl}) {

const [amount, setAmount] = useState(10)
const [category, setCategory] = useState('')
const [difficulty, setDifficulty] = useState('')
const [type, setType] = useState('')

const navigate = useNavigate()

console.log(category)
console.log(amount)
console.log(difficulty)
console.log(type)

const categoryObj = [
{label: 'Any category', id: ''},
{label: 'General Konwledge', id: 9},
{label: 'Entertainment: Books', id: 10},
{label: 'Entertainment: Film', id: 11},
{label: 'Entertainment: Music', id: 12},
{label: 'Entertainment: Musical & Theatres', id: 13},
{label: 'Entertainment: Television', id: 14},
{label: 'Entertainment: Video Games', id: 15},
{label: 'Entertainment: Board Games', id: 16},
{label: 'Science & Nature', id: 17},
{label: 'Science: Computers', id: 18},
{label: 'Science:  Mathematics', id: 19},
{label: 'Mythology', id: 20},
{label: 'Sports', id: 21},
{label: 'Geography', id: 22},
{label: 'History', id: 23},
{label: 'Politics', id: 24},
{label: 'Art', id: 25},
{label: 'Celebrities', id: 26},
{label: 'Animals', id: 27},
{label: 'Vehicles', id: 28},
{label: 'Entertainment Comics', id: 29},
{label: 'Science Gadgets', id: 30},
{label: 'Entertainment Japanese Anime & Manga', id: 31},
{label: 'Entertainment Cartoon & Animations', id: 32}
]

const typeObj = [
{label: 'Any Type', id: ''},
{label: 'Multiple choice', id: 'multiple'},
{label: 'True / False', id: 'boolean'},
]

const difficultyObj = [
{label: 'Any Difficulty', id: ''},
{label: 'Easy', id: 'easy'},
{label: 'Medium', id: 'medium'},
{label: 'High', id: 'hard'}
]

const createFetchURL = () => {
  let categoryChoice = category !='' ? `&category=${category}` : ''
  let difficultyChoice = difficulty !='' ? `&difficulty=${difficulty}` : ''
  let typeChoice = type !='' ? `&type=${type}` : ''

  const root=`https://opentdb.com/api.php?amount=${amount}${categoryChoice}${difficultyChoice}${typeChoice}`

  return root
}

useEffect(() => {
  createFetchURL()
},[amount, category, difficulty, type])


  return (
    <div className='container'>
      <div className='start-form'>
      <label htmlFor='question_number'>Number of Questions:</label>
    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} />
    
    <label htmlFor='category'>Select Category:</label>
    <select name='category' value={category} onChange={(e)=>setCategory(e.target.value)}>
      {categoryObj.map(e => <option key={e.id} value={e.id}>{e.label}</option>)}
    </select>

    <label htmlFor='difficulty'>Select Difficulty:</label>
    <select name='difficulty' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
      {difficultyObj.map(e => <option key={e.id} value={e.id}>{e.label}</option>)}
    </select>

    <label htmlFor='type'>Select Type:</label>
    <select name='type' value={type} onChange={(e) => setType(e.target.value)}>
      {typeObj.map(e => <option key={e.id} value={e.id}>{e.label}</option>)}
    </select>
    <button 
      onClick={()=> {
        setFetchUrl(createFetchURL())
        navigate('/quiz')
        }}
      className='btn'
      >Start Quiz</button>
    </div>
    
    </div>
  )
}

export default StartPage