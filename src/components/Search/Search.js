import React, { useState } from 'react'
import './Search.css'

const Search = (props) => {
  return (
    <div>
      <form className="Search" onSubmit={props.handleSubmit}>
        <input className="SearchBar" placeholder="Search For A Topic" type="text" name="search" onChange={props.handleChange} value={props.topic}/>
        <button className="SearchButton" type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search