import axios from "axios";
import React, { useEffect, useState } from "react";


export const MyRecipes = () => {

    const [allRecipes, setAllRecipes] = useState([]);
    const [sortedRecipes, setSortedRecipes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/my-recipes')
            .then(res => { setAllRecipes(res.data); console.log(res.data) })
            .catch(err => { console.log(err) })
    }, [])

    useEffect(() => {
        let sortingRecipes = allRecipes.sort((a, b) => new Date(...b.creationDate.split('/').reverse()) - new Date(...a.creationDate.split('/').reverse()));
        setSortedRecipes(sortingRecipes)
        console.log(sortingRecipes)
    }, allRecipes.length)

    return (
        <div className="container fridge-container">
            <h1 className="myRecipesTitle">My recipes  </h1>
            <div className="food-cards d-flex ">
                {sortedRecipes.map((el, index) => {
                    return (
                        <div className=" card " key={index}>
                            <div className="card-body" style={{ padding: '10%' }}>
                                <b>main course</b>
                                <p>{el.mainCourse.map((item, index) => { return (index === el.mainCourse.length - 1 ? item.name + ';' : item.name + ', ') })}</p>
                                <b>second course</b>
                                <p>{el.secondCourse.map((item, index) => { return (index === el.secondCourse.length - 1 ? item.name + ';' : item.name + ', ') })}</p>
                                <b>side dish</b>
                                <p>{el.sideDish}</p>
                                <p className="card-text" style={{ color: 'rgb(163, 163, 163', position: 'absolute', bottom: '20px' }}>{el.creationDate.split('T')[0]}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}