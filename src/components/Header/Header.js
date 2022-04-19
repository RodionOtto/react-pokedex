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
            <div className='title-div'>
            <h1 className='title'>React Pokedex</h1>
            <a href='https://github.com/RodionOtto/react-pokedex' target='_blank' className='title-link'>
                <img
                src={githubLogo}
                alt='Official logo of GitHub'
                className='title-logo'
                />
            </a>
            </div>
        </>
    )
}

export default Header;
