import React, { useEffect, useState } from "react";
import settingsImg from "../images/settings.png"
import images from "../indexImg";

export const Kitchen = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [mainCourse, setMaincourse] = useState([]);
    const [secondCourse, setSecondCourse] = useState([]);
    const [sideDish, setSideDish] = useState('');
    let courseCount = 0;
    const allFood = [];

    useEffect(() => {
        if (allFood.length === 0) {
            images[1].fruit.concat(images[1].veggie).forEach((item) => {
                allFood.push(item.name)
            })
        }
    })

    const onGenerate = (currentCourse) =>{
        if (currentCourse.length < 3) {
            let course = allFood[Math.floor(Math.random() * allFood.length)];
            {currentCourse === mainCourse &&  setMaincourse(currentCourse => [...mainCourse, ' ' + course ])}
            {currentCourse === secondCourse &&  setSecondCourse(currentCourse => [...secondCourse, ' ' + course ])}
            {currentCourse === sideDish &&  setSideDish(currentCourse => [...sideDish, ' ' + course ])}
        }
    }
    

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
                    <div className="col" style={{ fontWeight: 'bold', color: '#9EB23B' }}>
                        Second course
                    </div>
                ) : (
                    <div className="col">
                        Second course
                    </div>
                )
                }

                {activeStep === 3 ? (
                    <div className="col" style={{ fontWeight: 'bold', color: '#9EB23B' }}>
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
                    <p><span style={{ fontWeight: 'bold' }}>main course:</span>{mainCourse} </p>
                    <p><span style={{ fontWeight: 'bold' }}>second course:</span> {secondCourse}</p>
                    <p><span style={{ fontWeight: 'bold' }}>side dish:</span> {sideDish} </p>
                    <div className="formBtn">
                        <button type="button" className="btn"
                            onClick={() => {onGenerate(activeStep === 1 ? mainCourse : activeStep===2 ? secondCourse : sideDish)}}
                            disabled={mainCourse.length  === 3 || secondCourse.length  ===3 || sideDish.length ===3}>GENERATE</button>
                    </div>
                </form>
                <div className="steps row ">
                    <button type="button" className="btn  col-6"
                        disabled={activeStep === 1 ? true : false}
                        onClick={() => { setActiveStep(activeStep - 1); courseCount-- }}>Previous step</button>

                    <button type="button" className="btn  col-6 "
                        disabled={activeStep === 3 || activeStep === 2 && secondCourse.length < 1 || activeStep === 1 && mainCourse.length < 1 ? true : false}
                        onClick={() => { setActiveStep(activeStep + 1); courseCount++ }}>Next step</button>
                </div>
            </div>

        </div>

    )
}