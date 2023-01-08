import axios from "axios";
 import { useEffect, useState } from "react";
 import Card from './Card';

const Home = () => {

    let [products, productHandle] = useState([]);

    let [newslist, newslistHandler] = useState([]);

     useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            (response) => {
                 productHandle(response.data)
                //console.log(response.data)
            }
        )




              let newsurl = 'https://newsapi.org/v2/everything?q=tesla&from=2022-12-03&sortBy=publishedAt&apiKey=e4bfc07f153a448ca332b1f7f2403187';
            fetch(newsurl).then(
                response => {
                    let myresponse = response.json();
                        newslistHandler(myresponse)
                        console.log(myresponse)

                }
            )
            // async function getnews() {
            //     let newsurl = 'https://newsapi.org/v2/everything?q=tesla&from=2022-12-03&sortBy=publishedAt&apiKey=e4bfc07f153a448ca332b1f7f2403187';
            //     let response =  await fetch(newsurl);
            //       let myresponse = response.json();
            //       newslistHandler(myresponse)
            //       console.log(myresponse)
            // }

            // getnews()
            



    },[]);




    let productlist = products.map(product =>  
        <div className="col-3" key={product.id}>
                    <Card 
                         name={product.name} 
                         email={product.email}
                         phone={product.phone} 
                         city={product.address.city}
                         zipcode={product.address.zipcode}
                         website={product.website} />
          </div>
         )


    return <div>

      
       <h5>Welcome Products</h5>

       <div className="row">
       
        {productlist}
       
       </div>
       </div>
}

export default Home;