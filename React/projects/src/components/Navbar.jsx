import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    let style={marginLeft:'60px'}
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li style={style} className="nav-item">
                                
                                <NavLink className="nav-link" to={''} >Home</NavLink>
                            </li>
                            <li style={style} className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a> */}
                                <NavLink className="nav-link" to={'blogs'}>blogs</NavLink>
                            </li>
                            <li style={style} className="nav-item dropdown">
                                {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a> */}
                               <NavLink className="nav-link" to={'createblog'}>create blog</NavLink>
                            </li>
                            <li style={style} className="nav-item">
                                {/* <a className="nav-link " aria-disabled="true">Disabled</a> */}
                                <NavLink className="nav-link" to={'login'}>Login</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
