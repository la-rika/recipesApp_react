import axios from "axios";
import React, { useEffect, useState } from "react";


export const MyRecipes = () => {

    const [allRecipes, setAllRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/my-recipes')
            .then(res => { setAllRecipes(res.data) })
            .catch(err => { console.log(err) })
    }, [])
    return (
        <div className="container fridge-container">
            <h1 className="myRecipesTitle">My recipes  </h1>
            <div className="row food-cards d-flex ">
                {allRecipes.map((el, index) => {
                    return (
                        <div className="col-2 card " key={index}>
                            <div className="card-body" style={{ padding: '10%' }}>
                                <b>main course</b>
                                <p>{el.mainCourse.map((item, index) => { return (index === el.mainCourse.length - 1 ? item + ';' : item + ', ') })}</p>
                                <b>second course</b>
                                <p>{el.secondCourse.map((item, index) => { return (index === el.secondCourse.length - 1 ? item + ';' : item + ', ') })}</p>
                                <b>side dish</b>
                                <p>{el.sideDish}</p>
                                <p className="card-text" style={{ color: 'rgb(163, 163, 163' }}>{el.creationDate.split('T')[0]}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}