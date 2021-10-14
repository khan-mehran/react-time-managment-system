import React from 'react'
import {Link } from 'react-router-dom';
import styles from './header.module.css'

export const Header = () => {
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to='/'>Time Management</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className={`nav-link ${styles.nav}`} aria-current="page" to='/'>Home</Link>
                            </li>
                            
                        </ul>
                            <div className="form-group">
                                <Link to='/login'> <input type="submit" value="Login" className="btn float-right" id={styles.login_btn}/></Link>
                            </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default Header
