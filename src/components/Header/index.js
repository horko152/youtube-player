import React from 'react';
import './index.css';
import SearchBar from './components/SearchBar';
import Login from './components/Login';

const Header = () => {

    return(
        <div className="header">
            <SearchBar />
            <Login/>
        </div>
    );
}

export default Header;