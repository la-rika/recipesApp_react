import React from "react";
import settingsImg from "../images/settings.png"

export const Kitchen = () =>{
    return(
        <div className="container kitchen-container text-center">
        <div className="row">
            <div className="col">
                Main course
            </div>
            <div className="col">
                Second course
            </div>
            <div className="col">
                Side dish
            </div>
        </div>
        <div className="formDiv">
            <form className="addFoodForm" action="/kitchen" method="post">
                <img className="settingsImgKitchen" src={settingsImg} alt="filters-img" width="35px" height="35px"/>
                <p><span style="font-weight: bold;">main course:</span> ciso</p>
                <p><span style="font-weight: bold;">second course:</span> ciso</p>
                <p><span style="font-weight: bold;">side dish:</span> ciso</p>
                <div className="formBtn">
                    <button type="submit" className="btn">GENERATE</button>
                </div>
            </form>
            <div className="steps row ">
                <button type="button" className="btn  col-6">Previous step</button>
                <button type="button" className="btn  col-6 ">Next step</button>
            </div>
        </div>

    </div>

    )
}