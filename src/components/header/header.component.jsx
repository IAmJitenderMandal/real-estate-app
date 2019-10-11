import React from 'react';
import './header.styles.scss'

let Header = () => (
    <header>
        <div className='logo'><h2>Search Easy</h2></div>
        <nav className='nav'>
            <ul className='nav_list'>
                <li className='nav_link'>Home</li>
                <li className='nav_link'>Listings</li>
                <li className='nav_link'>Our agents</li>
                <li className='nav_link'>blog</li>
                <li className='nav_link'>pages</li>
                <li className='nav_link'>Contact</li>
            </ul>
        </nav>
        <div className='authentications'>
            <ul className='options'>
                <li className="login">login</li>
                <li className="register">sign up</li>
            </ul>
        </div>
    </header>
)

export default Header;