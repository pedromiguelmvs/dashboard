import { useEffect, useState } from 'react';

import '../styles/css/home.css';

import SearchBar from './SearchBar';

const Header = ({
        title,
        subtitle,
        searchBar,
        children
    }) => {

        const [haveSearchBar, setHaveSearchBar] = useState(false);

        useEffect(() => {
            if (searchBar) {
                setHaveSearchBar(true);
            }
        }, [searchBar]);

        return (
            <header className="header">
                <div>
                    <h3>{title}</h3>
                    <h5>{subtitle}</h5>
                </div>
                {(haveSearchBar) ? (
                    <SearchBar placeholder="Search..." />
                ) : (
                    <p>{children}</p>
                )}
            </header>
        );
}

export default Header;