import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <div>
            <>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} id='navBar'>
                    <div className="container-fluid">
                        <Link className="navbar-brand " to="/">TextUtils</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/About">{props.AboutUs}</Link>
                                </li>

                                {/* <li className="nav-item">
                                <a className="nav-link" href="/About.js">{props.AboutUs}</a>
                                 </li> */}

                                <li>

                                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} my-2`}>
                                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" htmlhmtlhtmlFor="flexSwitchCheckDefault">Enable Dark-Mode</label>
                                    </div>
                                </li>

                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        </div>
    )
}


// always we have to write it(with import propType) : it help us to 
// manage the props type , like String, number, object etc

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    AboutUs: PropTypes.string.isRequired
}

// by default set the props ;
Navbar.defaultProps = {
    // title: "Set ur title here",
    AboutUs: "Set aboutUs here"
};