import {Link} from 'react-router-dom';

function Navbar() {
    return (
      <div className="Navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <Link to="/about">About</Link>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link disabled">Disabled</a>
          </div>
        </div>
      </nav>
      </div>
    );
  }
  
  export default Navbar;
  