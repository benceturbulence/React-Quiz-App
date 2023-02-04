const fetchQuestions = async (fetchUrl) => {
    
    const data = await fetch(fetchUrl)
    return data.json()
}

export default fetchQuestions