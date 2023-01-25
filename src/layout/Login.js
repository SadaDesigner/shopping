const Login = () => {
  return (
    <>
      <form>
        <div className="offset-3 col-6">
          <div className="row">
            <div className="col-md-12 mb-2">
              <label>Username</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="col-md-12 mb-2">
              <label>Password</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="col-md-12">
              <button className="btn btn-success">Login</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Login;
