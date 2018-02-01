
import React from 'react'

let NewsArticle = ({ article }) => {
	return (
  	<div className='news' dangerouslySetInnerHTML={{__html: article.text}} />
  )
}


export default NewsArticle
