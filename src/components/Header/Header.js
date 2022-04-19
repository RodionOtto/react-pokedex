import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import githubLogo from '../../images/githubLogo.png';

const Header = () => {
    return(
        <>
            <header>
                <img
                    src={logo}
                    alt="Official logo of Pokemon"
                    className="header-logo"
                />
                <nav className="nav">
                    <ul className="nav-ul">
                        <li className="nav-link">Pokedex</li>
                        <li className="nav-link">My Collection</li>
                    </ul>
                </nav>
            </header>
            <>
            <h1 className='title'>React Pokedex</h1>
            <a href='' className='title-link'>
                <img
                src={githubLogo}
                alt='Official logo of GitHub'
                className='title-logo'
                />
            </a>
            </>
        </>
    )
}

export default Header;
