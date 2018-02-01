
import React from 'react'
import {Link} from 'react-router-dom'


/*
Nav = () ->
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown link
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
*/

let Nav = () => {
  return (
    <div id='nav'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>

        <a className="navbar-brand" href="#">
          <span className='rr-title'>
            <span className='rr-title-cap'>R</span>owdy 
            <span className='rr-title-cap'>R</span>anch
          </span> 
          <span className='rr-title-tx'>TX</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-start" id="navbarNavDropdown">

          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to='/page/goats'>Goats</Link></li>

            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Kennel 
                  <span className="caret" />
              </a>
              <div className='dropdown-menu'>
                <Link className="dropdown-item" to='/page/kennel-our-dogs'>Our Dogs</Link>
                <Link className="dropdown-item" to='/page/kennel-pepper'>Pepper</Link>
                <Link className="dropdown-item" to='/page/kennel-diesel'>Diesel</Link>
                <Link className="dropdown-item" to='/page/kennel-coco'>Coco</Link>
                <Link className="dropdown-item" to='/page/kennel-bear'>Bear</Link>
                <Link className="dropdown-item" to='/page/kennel-litter2017-0001'>Litter #1 (Sep 2017)</Link>
              </div>
            </li>

            <li className="nav-item"><Link className="nav-link" to='/news'>News</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/gallery'>Gallery</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/page/forsale'>For Sale</Link></li>
          </ul>

          <div className='d-flex navbar-nav ml-auto'>
            <Link className="nav-link" to='/page/about'>About Us</Link>
            <Link className="nav-link" to='/page/contact'>Contact</Link>
          </div>

        </div>

      </nav>
    </div>
  )
}


/*
Nav = () ->
  <div className='container-fluid' id='nav'>
    <nav className='navbar navbar-static-top'>

      <div className='navbar-header'>
        <button className='navbar-toggle collapsed' type='button' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
        <a className='navbar-brand header-title' href='/'>
          <span className='rr-title'>
            <span className='rr-title-cap'>R</span>owdy 
            <span className='rr-title-cap'>R</span>anch
          </span> 
          <span className='rr-title-tx'>TX</span>
        </a>
      </div>

      <div className='collapse navbar-collapse' id='navbar'>
        <ul className='nav navbar-nav'>

          <li><Link to='/page/goats'>Goats</Link></li>

          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Kennel 
                <span className="caret" />
            </a>
            <ul className='dropdown-menu'>
              <li>
                <Link to='/page/kennel-our-dogs'>Our Dogs</Link>
                <Link to='/page/kennel-pepper'>Pepper</Link>
                <Link to='/page/kennel-diesel'>Diesel</Link>
                <Link to='/page/kennel-coco'>Coco</Link>
                <Link to='/page/kennel-bear'>Bear</Link>
                <Link to='/page/kennel-litter2017-0001'>Litter #1 (Sep 2017)</Link>
              </li>
            </ul>
          </li>

          <li><Link to='/news'>News</Link></li>
          <li><Link to='/gallery'>Gallery</Link></li>
          <li><Link to='/page/forsale'>For Sale</Link></li>
        </ul>
        <ul className='nav navbar-nav pull-right'>
          <li><Link to='/page/about'>About Us</Link></li>
          <li><Link to='/page/contact'>Contact</Link></li>
        </ul>
      </div>

    </nav>
  </div>
*/

export default Nav
