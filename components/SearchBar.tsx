"use client";

import { useState } from "react";

import SearchManufucturer from "./SearchManufacturer";
import { manufacturers } from "@/constants";


const SearchBar = () => {

    const [manufacturers, setManufacturer] = 
    useState("");
    
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
