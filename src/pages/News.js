//import About from './About';
import React from "react";
import { useEffect, useState } from "react";
import CustomAlerts from "../utilities/CustomAlerts";
import Article from "./Article";
import { GridBody } from "./GridBody";
import LoadingSpin from "./LoadingSpin";

const News = () => {
  let [newslist, newslistHandler] = useState([]);
  let [isgridview, handleView] = useState(false);
  let [spinner, handleSpinner] = useState(true);
  let [alertObj, handleShowAlert] = useState({showAlert: false, alertMsg:'' }) 

  useEffect(() => {

    let newsurl =
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e4bfc07f153a448ca332b1f7f2403187";
    fetch(newsurl)
      .then((response) => {
        if(response.status >=200 && response.status <=299) {
            return response.json()
        }
        else {
            handleShowAlert({showAlert: true, alertMsg: response.statusText})
            throw Error('sadashiv' + response.statusText)
            
        }
        
    })
      .then((response) => {
        handleSpinner(false);
        newslistHandler(response.articles);
        //console.log(response);
      })
      .catch((error) => {
        handleShowAlert({showAlert: true, alertMsg: error.message})
        //console.log('myerror' + error.message)
      })



    // let news = newslist.map(
    //     article => article.author
    // )
    // async function getnews() {
    //     let newsurl = 'https://newsapi.org/v2/everything?q=tesla&from=2022-12-03&sortBy=publishedAt&apiKey=e4bfc07f153a448ca332b1f7f2403187';
    //     let response =  await fetch(newsurl);
    //       let myresponse = response.json();

    //       console.log(myresponse)
    // }

    // console.log('api')

    // getnews()
  }, []);

  let articlesList = newslist.map((article) => {
    return (
      <div className="col-12 col-md-3">
        <Article
          name={article.title}
          description={article.description}
          urlImage={article.urlToImage}
          url={article.url}
          publishdate={article.publishedAt}
        ></Article>
      </div>
    );
  });

  let articlesList2 = newslist.map((article) => {
    return (
      <GridBody
        name={article.title}
        description={article.description}
        urlImage={article.urlToImage}
        url={article.url}
        publishdate={article.publishedAt}
      ></GridBody>
    );
  });

  return (
    <div>
      <div className="row mb-2">
        <div className="col">
          <h5>News</h5>
          
        </div>
        <div className="col d-flex justify-content-end">
          <button
            className={
              isgridview ? "btn btn-light me-2" : "btn btn-primary me-2"
            }
            onClick={() => handleView(false)}
          >
            List View
          </button>
          <button
            className={isgridview ? "btn btn-primary" : "btn btn-light"}
            onClick={() => handleView(true)}
          >
            Grid View
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex justify-content-center flex-wrap">
        {alertObj.showAlert ? <CustomAlerts alertType='alert-danger'  alertMsg={alertObj.alertMsg}></CustomAlerts> : null}
          {spinner ? <LoadingSpin spintype="text-success"></LoadingSpin> : null}
        </div>

        {isgridview ? (
          <table className="table table-responsive table-bordered">
            <thead class="table-dark">
              <tr>
                <th width="120">Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Link</th>
                <th>Publish Date</th>
              </tr>
            </thead>
            <tbody>{articlesList2}</tbody>
          </table>
        ) : (
          articlesList
        )}
      </div>
    </div>
  );
};

export default News;
