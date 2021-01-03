
import React, { useState, useEffect } from 'react';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1080) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            THE SPIDERS
            <i class='fas fa-spider' />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/TakeQuiz'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Take Quiz
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/comments'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Discussion
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/AboutUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Resources'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                  to='/SignUp'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
              </Link>
            </li>
          </ul>

          {button && <Link to='/SignUp'>
            <Button buttonStyle='btn--outline'>
              SIGN UP
            </Button>
          </Link>}

        </div>
      </nav>
    </>
  );
}

export default Navbar;