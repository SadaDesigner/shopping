const Card = (product) => {
   
    return <>
    <div className="card mb-3" style={{width:'100%'}}>
 
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.email}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{product.phone}</li>
    <li className="list-group-item">{product.city}</li>
    <li className="list-group-item">{product.zipcode}</li>
  </ul>
  <div className="card-body">
    <a  href={product.website} className="card-link">{product.website}</a>
   
  </div>
</div>
    </>
}

export default Card;