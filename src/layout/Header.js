import AppLogo from '../logo.png'
const Header =() => {

    return <>
    <nav className="navbar navbar-expand-lg mb-3" style={{backgroundColor: '#e3f2fd'}}>
        <div className="container-fluid">
            <a href="/#" className="navbar-brand">
                <img src={AppLogo} width="45" height="auto" alt=''></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-grow-1">
                <li className="nav-item">
                <a href="/#" className="nav-link active" aria-current="page">Home</a>
                </li>
                <li className="nav-item">
                <a href="/#" className="nav-link">Link</a>
                </li>
            
                <li className="nav-item ms-auto">
                <a href="/#" className="nav-link">test</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    </>
}
export default Header;