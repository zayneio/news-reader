import React from 'react'
import './Article.css'

const Article = (props) => {
    return(
      <div className="Article">
        <div className="Left">
          <img className="CoverImg" src={props.article.urlToImage} alt={props.article.title} width="100%" />
        </div>
        <div className="Right">
    <div className="Author">By {props.article.author} on {props.article.publishedAt}</div>
          <div className="Title">{props.article.title}</div>
          <div className="Description">{props.article.description}</div>
          <div className="ButtonContainer">
            <a href={props.article.url} target="_blank" title={props.article.title} className="Button">Read This Article</a>
          </div>
        </div>
      </div>
    )
}

export default Article