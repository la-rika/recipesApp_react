import axios from "axios";
import React, { useEffect, useState } from "react";
import images from "../indexImg";

export const MyRecipes = () => {

    const [allRecipes, setAllRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/my-recipes')
            .then(res => { setAllRecipes(res.data); console.log(res.data) })
            .catch(err => { console.log(err) })
    }, [])


    return (
        <div className="container fridge-container">
            <h1 className="myRecipesTitle">My recipes  </h1>
            <div className="food-cards d-flex ">
                {allRecipes.map((el, index) => {
                    return (
                        <div className=" card " key={index}>
                            <div className="bin-container d-flex justify-content-end">
                                <img className="bin-image" src={images[0].binIcon} alt="bin-icon" width="20px" height="20px" />
                            </div>
                            <div className="card-body" style={{ padding: '10%' , paddingTop:'28px'}}>
                                <b>main course</b>
                                <p>{el.mainCourse.map((item, index) => { return (index === el.mainCourse.length - 1 ? item.name + ';' : item.name + ', ') })}</p>
                                <b>second course</b>
                                <p>{el.secondCourse.map((item, index) => { return (index === el.secondCourse.length - 1 ? item.name + ';' : item.name + ', ') })}</p>
                                <b>side dish</b>
                                <p>{el.sideDish}</p>
                                <p className="card-text card-date" >{el.creationDate.split('T')[0]}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}