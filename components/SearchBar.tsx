"use client";


const SearchBar = () => {
    const handleSearch = () => {}
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufucturer />
            </div>
        </form>
    )
}

export default SearchBar;
