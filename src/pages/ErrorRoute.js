//import { useRouteError } from 'react-router-dom';

const ErrorRoute = (sada) => {
  //let error = useRouteError();
  console.log(sada);
  return (
    <>
    <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
    <center>
        <h2>Oooops</h2>
        <h5>404 Error Not Fount</h5>
        {/* <p>{error.statusText || error.message}</p> */}
      </center>
    </div>
     
    </>
  );
};

export default ErrorRoute;
