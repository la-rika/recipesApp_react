import React from "react";


export const MyRecipes = () => {

    return (
        <div className="container fridge-container">
            <h1 className="myRecipesTitle">My recipes  </h1>
            <div className="row food-cards d-flex justify-content-between">
                <div className="col-2 card " >
                    <div className="card-body" style={{padding: '10%'}}>
                        <p><span style={{fontWeight: 'bold'}}>main course:</span> ciso</p>
                        <p><span style={{fontWeight: 'bold'}}>second course:</span> ciso</p>
                        <p><span style={{fontWeight: 'bold'}}>side dish:</span> ciso</p>
                        <p className="card-text" style={{color: 'rgb(163, 163, 163'}}>20/07/2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}