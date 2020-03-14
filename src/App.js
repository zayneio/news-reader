import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Search from './components/Search/Search'
import Article from './components/Article/Article'

function App() {
  const [articles, setArticles] = useState([])
  const [topic, setTopic] = useState('coronavirus')

  useEffect(() => {
    queryTopic()
  }, [])

  const queryTopic = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/v2/everything?q=${topic}&from=2020-02-14&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`)
    .then( res => {
      console.log(res.data.articles)
      setArticles(res.data.articles)
    })
    .catch( res => console.log('Error:', res))
  }

  const handleChange = (e) => {
    e.preventDefault()

    setTopic(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    queryTopic()
  }

  const list = articles.map( (article,index) => {
    return (
      <Article key={index} article={article}/>
    )
  })

  return (
    <div className="App">
      <Search topic={topic} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <div className="ArticleContainer">
        {list}
      </div>
    </div>
  );
}

export default App;
