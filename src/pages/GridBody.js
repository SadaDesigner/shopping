const GridBody = (article) => {
    let truncatedes = article.description ? article.description.substring(0,400) + '...' : '';
    let truncatetitle = article.name ? article.name.substring(0, 120) + '...' : '';
    return <tr>
                <td><img alt="" className="img-news" src={article.urlImage}></img></td>
                    <td>{truncatetitle}</td>
                    <td>{truncatedes}</td>
                    <td><a href={article.url}>Link</a></td>
                    <td>{article.publishdate}</td>
                </tr>
         
}



export {GridBody};