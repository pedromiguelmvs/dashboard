import '../styles/css/home.css';

import SearchBar from './SearchBar';

const Header = ({
        title,
        subtitle
    }) => {
        return (
            <header className="header">
                <div>
                    <h3>{title}</h3>
                    <h5>{subtitle}</h5>
                </div>
                <SearchBar placeholder="Search..." />
            </header>
        );
}

export default Header;