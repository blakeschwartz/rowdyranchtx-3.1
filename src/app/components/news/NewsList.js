
import React from 'react'
import NewsArticle from './NewsArticle'

let NewsList = ({ news }) => {
	return (
	  <div>
	    {news.map((article) =>
	      <NewsArticle
	        key={article.id}
	        article={article}
	      />
	    )}
	  </div>
  )
}

export default NewsList
