import React from "react";
import images from "../indexImg";

export const SearchInput = ({ filtered }) => {
    return (
        <form className="search-and-filters" action="/fridge" method="post">
            <div className="searchInput">
                {filtered &&
                    <span> <img className="settingsImgFridge" src={images[0].settingsIcon} alt="filters-img" width="35px"
                        height="35px" style={{marginRight: '5px'}}/></span>
                }
                <input type="search" className="search" />
                <button className="btn fridge-search-btn" type="submit" style={{marginLeft: '5px'}}>Search</button>
            </div>
        </form>
    )
}