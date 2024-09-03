import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/jb.png';
import './Nav.css';

function Nav() {

  // Logout function to remove the token and redirect
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('authToken');

    // Redirect to the login page
    window.location.href = '/'; // Adjust the path if needed
  };

  return (
    <div className="col-12 ">
      <nav className="NAVBAR glass-background fixed-bottom mb-3 justify-content-center align-items-center offset-4 offset-md-4 offset-lg-5 offset-xl-5 offset-xxl-5 col-md-4 col-lg-2 col-xl-2 col-xxl-2  col-4">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-4 d-flex justify-content-center align-items-center">
              <Link to="/profile">
                <i className="bi bi-person-circle fs-3 text-primary"></i>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center navInner">
              <i className="bi bi-box-arrow-in-right fs-3 text-danger" onClick={handleLogout}></i>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center navInner">
              <Link to="/home">
                <img src={logo} alt="Logo" className='logo-img' />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
