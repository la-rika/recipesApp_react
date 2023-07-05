import React from "react";
import apple from "../images/food/fruit-apple.png"

export const Fridge = () => {

    const allFoodImg = [
        apple,
        // 'images/food/fruit-apricot.png',
        // 'images/food/fruit-cherry.png',
        // 'images/food/fruit-grape.png',
        // 'images/food/fruit-orange.png',
        // 'images/food/fruit-pear.png',
        // 'images/food/fruit-strawberry.png',
        // 'images/food/fruit-watermelon.png',
        // 'images/food/veggie-carrot.png',
        // 'images/food/veggie-corn.png',
        // 'images/food/veggie-eggPlant.png',
        // 'images/food/veggie-lettuce.png',
        // 'images/food/veggie-mushroom.png',
        // 'images/food/veggie-zucchini.png'
    ]

    const foodTitles = []
    allFoodImg.forEach(food => {
        const fileName = food.split('-');
        const foodName = fileName[1].split('.png')
        foodTitles.push(foodName[0])
        console.log(foodName)
    })

    return (
        <div className="container fridge-container ">
            <form class="search-and-filters" action="/fridge" method="post">
                <div class="searchInput">
                    <span> <img class="settingsImgFridge" src="images/settings.png" alt="filters-img" width="35px"
                        height="35px" /></span>
                    <input type="search" class="search" />
                    <button class="btn fridge-search-btn" type="submit">Search</button>
                </div>
            </form>
            <div className="row food-cards gy-5">
                {allFoodImg.forEach(food => {
                    <div className="col-lg-2 mb-5 text-center">
                        <img src={food} class="card-img-top foodImg" alt="..." />
                        <div className="card-body">
                            {foodTitles.map((item) => item.includes(food))}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}