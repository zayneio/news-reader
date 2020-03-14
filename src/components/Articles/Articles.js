import React from 'react'
import Pagination from './Pagination/Pagination'
import PaginationHelper from '../../utils/PaginationHelper'
import Article from './Article/Article'

const Articles = (props) => {
  const paginatedArticles = PaginationHelper(props.articles, 10, props.currentPage)
  const articles = paginatedArticles.map( (article, index) => {
    return (
      <Article key={index} article={article}/>
    )
  })

  return (
    <div className="ArticleContainer">
      <Pagination currentPage={props.currentPage} articles={props.articles}handlePageChange={props.handlePageChange}/>
      {articles}
      <Pagination currentPage={props.currentPage} articles={props.articles}handlePageChange={props.handlePageChange}/>
    </div>
  )
}

export default Articles
