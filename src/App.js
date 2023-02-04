import QuizPage from './pages/QuizPage';
import { GameContextProvider } from './context/GameContext';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [fetchUrl, setFetchUrl] = useState('https://opentdb.com/api.php?amount=10')

  return (
    <Router>
    <GameContextProvider>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<StartPage setFetchUrl={setFetchUrl}/>} />
          <Route path='/quiz' element={<QuizPage fetchUrl={fetchUrl}/>} />
        </Routes>
      </div>
    </GameContextProvider>
    </Router>
  );
}

export default App;
