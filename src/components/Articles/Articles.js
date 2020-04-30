import React from 'react'
import Pagination from './Pagination/Pagination'
import PaginationHelper from '../../utils/PaginationHelper'
import DragNDrop from './DragNDrop'

const Articles = (props) => {
  const articles = PaginationHelper(props.articles, 10, props.currentPage)

  return (
    <div className="ArticleContainer">
      <Pagination currentPage={props.currentPage} articles={props.articles} handlePageChange={props.handlePageChange}/>
      <DragNDrop articles={articles}/>
      <Pagination currentPage={props.currentPage} articles={props.articles} handlePageChange={props.handlePageChange}/>
    </div>
  )
}

export default Articles
