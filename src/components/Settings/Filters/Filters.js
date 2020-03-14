import React from 'react'
import './Filters.css'

const Filters = (props) => {
  return (
    <div className="FiltersContainer">
      <h2>Filter Settings:</h2>
      <div className="FilterBox">
        <div className="Filter">
          <label>Sort By:</label>
          <select onChange={props.handleChange} name="sortBy">
            <option value="Relevancy">Relevancy</option>
            <option value="Popularity">Popularity</option>
            <option value="PublishedAt">Publish Date</option>
          </select>
        </div>
        <div className="Filter DateFilters">
          <label>From Date:
            <input type="text" name="fromDate" onChange={props.handleChange} value={props.fromDate}/>
          </label>
          <label>To Date:
            <input type="text" name="toDate" onChange={props.handleChange} value={props.toDate} placeholder="set to (e.g. 03-14-2020)"/>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Filters