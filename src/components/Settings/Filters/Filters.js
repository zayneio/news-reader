import React from 'react'
import './Filters.css'

const Filters = (props) => {
  const options = ['relevancy', 'popularity', 'publishedAt'].map(option => {
    return (<option selected={option === props.sortBy} key={option} value={option}>{option}</option>)
  })

  return (
    <div className="FiltersContainer">
      <h2>Filter Settings:</h2>
      <div className="FilterBox">
        <div className="Filter">
          <label>Sort By:</label>
          <select onChange={props.handleChange} name="sortBy">
            {options}
          </select>
        </div>
        <div className="Filter DateFilters">
          <label>From Date:
            <input type="text" name="fromDate" onChange={props.handleChange} value={props.fromDate}/>
          </label>
          <label>To Date:
            <input type="text" name="toDate" onChange={props.handleChange} value={props.toDate} placeholder="e.g. 2020-03-14"/>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Filters