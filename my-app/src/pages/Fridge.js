import React from "react";
import images from "../indexImg";

export const Fridge = () => {

    const allFoodImg = [
        images.apple,
        images.apricot,
        images.orange,
        images.pear,
        images.cherry,
        images.strawberry,
        images.watermelon
    ]

    const foodTitles = []
    allFoodImg.forEach(food => {
        const fileName = food.split('-');
        const foodName = fileName[1].split('.')
        foodTitles.push(foodName[0])
    })

    return (
        <div className="container fridge-container ">
            <form className="search-and-filters" action="/fridge" method="post">
                <div className="searchInput">
                    <span> <img className="settingsImgFridge" src="images/settings.png" alt="filters-img" width="35px"
                        height="35px" /></span>
                    <input type="search" className="search" />
                    <button className="btn fridge-search-btn" type="submit">Search</button>
                </div>
            </form>
            <div className="row food-cards gy-5">
                <div className="col-lg-2 mb-5 text-center">
                    <img src={images.apple} className="card-img-top foodImg" alt="..." />
                    <div className="card-body">
                        {foodTitles.map((item) => <p>{item}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}