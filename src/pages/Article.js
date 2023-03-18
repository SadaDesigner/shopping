import { useState } from "react";

const Article = (article) => {
  

  let truncatedes = article.description ? article.description.substring(0, 55) + '...' : '';
  let truncatetitle = article.name ? article.name.substring(0, 55) + '...' : '';
   
    return <>
    <div className="card mb-3" style={{width:'100%'}}>
      <img className="img-news" src={article.urlImage}></img>
 
  <div className="card-body">
    <h5 className="card-title">{truncatetitle}</h5>
    <p className="card-text">{truncatedes}</p>
  </div>

  <div className="card-footer d-flex justify-content-between align-items-center">
    <a  href={article.url} className="card-link">Read</a>
    <label className='font-small'>{article.publishdate}</label>
  </div>

</div>
    </>
}

export default Article;