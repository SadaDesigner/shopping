
const Card = ({product}) => {
   let {id, name, email, phone, address, website} = product;
    return <>
    <div className="card mb-3" style={{width:'100%'}}>
 
  <div className="card-body">
  <p className="card-text">{id}</p>
    <p className="card-text">{email}</p>
    <h5 className="card-text">{name}</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{phone}</li>
    <li className="list-group-item">{address.city}</li>
    <li className="list-group-item">{address.zipcode}</li>
  </ul>
  <div className="card-body">
    <a  href={website} className="card-link">{website}</a>
   
  </div>
</div>
    </>
}

export default Card;