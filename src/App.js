import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Articles from './components/Articles/Articles'
import Settings from './components/Settings/Settings'

const App = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [articles, setArticles] = useState([])
  const [filters, setFilters] = useState({
    topic: 'coronavirus',
    sortBy: 'publishedAt',
    fromDate: '2020-02-14',
    toDate: ''
  })
console.log('filters:', filters)
  // Get an initial set of articles based off the default filter settings
  useEffect(() => queryTopic(), [])

  // Make an api request to our API with the current filter settings
  const queryTopic = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/v2/everything`,
    {
      params: {
        q: filters.topic,
        from: filters.fromDate,
        to: filters.toDate,
        sortBy: filters.sortBy,
        apiKey: process.env.REACT_APP_API_KEY
      }
    })
    .then( res => setArticles(res.data.articles))
    .catch( res => console.log('Error:', res)) //TODO: add better error handling
  }

  // Make a new api request to our 3rd party news api on submit
  const handleSubmit = (e) => {
    e.preventDefault()

    queryTopic()
  }

  // Handle page changes by the user
  const handlePageChange = (page, e) => {
    e.preventDefault()

    setCurrentPage(page)
  }

  // Handle filter changes
  const handleChange = (e) => {
    e.preventDefault()

    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  const { topic, sortBy, fromDate, toDate } = filters

  return (
    <div className="App">
      <Settings
        topic={topic} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
        sortBy={sortBy} 
        fromDate={fromDate} 
        toDate={toDate}
      />
      <Articles
        currentPage={currentPage} 
        articles={articles}
        handlePageChange={handlePageChange}        
      />
      <div>Data provided by http://newsapi.org</div>
    </div>
  );
}

export default App;
