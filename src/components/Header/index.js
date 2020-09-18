import React from 'react';
import './index.css';
// import { Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import Login from './components/Login';

const Header = () => {

    // const [searchItem, setSearchItem] = useState('');

    return(
        <div className="header">
            <SearchBar />
            <Login/>
        </div>
    );
}

export default Header;