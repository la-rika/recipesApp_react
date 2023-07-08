import React, { useEffect, useState } from "react";
import settingsImg from "../images/settings.png"
import images from "../indexImg";

export const Kitchen = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [mainCourse, setMaincourse] = useState([]);
    const [secondCourse, setSecondCourse] = useState([]);
    const [sideDish, seSIdeDish] = useState('');
    const allFood = [];

    useEffect(()=>{
        //for each item in images lo metto dentro allFood e poi lo uso per prendere un elemento random
    },[])

    //prendere elemento random da array instruzioni:
    // var item = items[Math.floor(Math.random()*items.length)];

    return (
        <div className="container kitchen-container text-center">
            <div className="row">

                {activeStep === 1 ? (
                    <div className="col" style={{ fontWeight: 'bold', color: '#9EB23B' }}>
                        Main course
                    </div>
                ) : (
                    <div className="col" >
                        Main course
                    </div>
                )
                }

                {activeStep === 2 ? (
                    <div className="col" style={{ fontWeight: 'bold' , color: '#9EB23B'}}>
                        Second course
                    </div>
                ) : (
                    <div className="col">
                        Second course
                    </div>
                )
                }

                {activeStep === 3 ? (
                    <div className="col" style={{ fontWeight: 'bold' , color: '#9EB23B'}}>
                        Side dish
                    </div>
                ) : (
                    <div className="col">
                        Side dish
                    </div>
                )
                }


            </div>
            <div className="formDiv">
                <form className="addFoodForm" action="/kitchen" method="post">
                    <img className="settingsImgKitchen" src={settingsImg} alt="filters-img" width="35px" height="35px" />
                    <p><span style={{ fontWeight: 'bold' }}>main course:</span> ciso</p>
                    <p><span style={{ fontWeight: 'bold' }}>second course:</span> ciso</p>
                    <p><span style={{ fontWeight: 'bold' }}>side dish:</span> ciso</p>
                    <div className="formBtn">
                        <button type="submit" className="btn">GENERATE</button>
                    </div>
                </form>
                <div className="steps row ">
                    <button type="button" className="btn  col-6"
                        disabled={activeStep === 1 ? true : false}
                        onClick={() => setActiveStep(activeStep - 1)}>Previous step</button>

                    <button type="button" className="btn  col-6 "
                        disabled={activeStep === 3 ? true : false}
                        onClick={() => setActiveStep(activeStep + 1)}>Next step</button>
                </div>
            </div>

        </div>

    )
}