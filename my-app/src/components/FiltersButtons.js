import React from "react";

export const FiltersButtons = ({onClick, filter}) => {
    return (
        <div className="d-flex justify-content-between">
            <button type="button" className="btn filterButton" id={filter === '' && 'activeButton'} onClick={onClick}>All</button>
            <button type="button" className="btn filterButton" id={filter === 'fruit' && 'activeButton'} onClick={onClick}>Fruits</button>
            <button type="button" className="btn filterButton" id={filter === 'veggie' && 'activeButton'} onClick={onClick}>Vegetables</button>
            <button type="button" className="btn filterButton" id={filter === 'meat' && 'activeButton'} onClick={onClick}>Meat</button>
            <button type="button" className="btn filterButton" id={filter === 'fish' && 'activeButton'} onClick={onClick}>Fish</button>
            <button type="button" className="btn filterButton" id={filter === 'pasta' || filter === 'rice' && 'activeButton'} onClick={onClick}>Pasta and Rice</button>
            <button type="button" className="btn filterButton" id={filter === 'legs' && 'activeButton'} onClick={onClick}>Legumes</button>
            <button type="button" className="btn filterButton" id={filter === 'bread' && 'activeButton'} onClick={onClick}>Bread</button>
        </div>
    )
}