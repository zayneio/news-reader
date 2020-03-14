import React from 'react'
import './Pagination.css'
import Divider from '../../Divider/Divider'

const Pagination = (props) => {
  const pages = Math.ceil(props.articles.length / 10)
  const pageTotal = Array.from(Array(pages).keys())

  const paginationBar = pageTotal.map( (page) => {
    const value = page + 1
    return (
      <li className="PaginationListItem" key={page}>
        <button className={value === props.currentPage ? 'active' : null} onClick={props.handlePageChange.bind(this, value)}>
          {value}
        </button>
      </li>
    )
  })

  return (
    <div className="Pagination">
      <h3>Pages</h3>
      <Divider margin={0}/>
      <ul className="PaginationList">
        {paginationBar}
      </ul>
      <Divider margin={0}/>
    </div>
  )
}

export default Pagination