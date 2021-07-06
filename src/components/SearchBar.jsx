import '../styles/css/home.css';

const SearchBar = ({
        placeholder
    }) => {
        return (
            <div className="searchbar">
                <img
                    src="https://pics.freeicons.io/uploads/icons/png/1695273891574330935-20.png"
                    alt="find"
                />
                <input type="text" placeholder={placeholder} />
            </div>
        );
}

export default SearchBar;