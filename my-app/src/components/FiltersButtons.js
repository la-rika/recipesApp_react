import React from "react";

export const FiltersButtons = ({onClick}) => {
    return (
        <div className="d-flex justify-content-between">
            <button type="button" className="btn filterButton" onClick={onClick}>Fruits</button>
            <button type="button" className="btn filterButton" onClick={onClick}>Vegetables</button>
            <button type="button" className="btn filterButton" onClick={onClick}>Meat</button>
            <button type="button" className="btn filterButton" onClick={onClick}>Bread</button>
            <button type="button" className="btn filterButton" onClick={onClick}>Pasta</button>
            <button type="button" className="btn filterButton" onClick={onClick}> Rice</button>
            <button type="button" className="btn filterButton" onClick={onClick}>Legumes</button>
            <button type="button" className="btn filterButton" onClick={onClick}>Fish</button>
        </div>
    )
}