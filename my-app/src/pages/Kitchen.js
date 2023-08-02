import React, { useEffect, useState } from "react";
import settingsImg from "../images/settings.png"
import images from "../indexImg";
import { useSelector, useDispatch } from "react-redux";
import { mainCourseAdd, secondCourseAdd, sideDishAdd } from "../redux/reducers/kitchen";

export const Kitchen = () => {

    const dispatch = useDispatch();
    const mainCourse = useSelector((state) => state.kitchen.mainCourse)
    const secondCourse = useSelector((state) => state.kitchen.secondCourse)
    const sideDish = useSelector((state) => state.kitchen.sideDish)


    const [activeStep, setActiveStep] = useState(1);
    const [mainFood, setMainFood] = useState([])
    const [secondFood, setSecondFood] = useState([])
    const [sideOnly, setSideOnly] = useState([])
    let mf = []
    let sf = []
    let so = []

    useEffect(() => {
        if (mainFood.length === 0 && sideOnly.length === 0) {
            images.forEach((item, index) => {
                if (index !== 0)
                    if (item.src.includes('pasta-rice') || item.src.includes('veggie'))
                        mf.push(item.name)
                    else if (!item.src.includes('pasta-rice') || !item.src.includes('fruit'))
                        sf.push(item.name)
                    else
                        so.push(item.name)
            })
            setMainFood(mf);
            setSideOnly(so)
        }
    }, [])

    const onGenerate = (currentCourse) => {
        if (currentCourse.length < 3) {
            let course = mainFood[Math.floor(Math.random() * mainFood.length)];
            let sideCourse = sideOnly[Math.floor(Math.random() * sideOnly.length)];

            { currentCourse === mainCourse && dispatch(mainCourseAdd(course)) }
            { currentCourse === secondCourse && dispatch(secondCourseAdd(course)) }
            { currentCourse === sideDish && dispatch(sideDishAdd(sideCourse)) }
        }
    }

    const onComplete = (mainCourse, secondCourse, sideDish) => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = today.getMonth() + 1;
        const dd = today.getDate();
        const date = yyyy + '/' + mm + '/' + dd;

        const payload = {
            mainCourse: mainCourse,
            secondCourse: secondCourse,
            sideDish: sideDish,
            date: date
        }
        console.log(payload)
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
                    <p><span style={{ fontWeight: 'bold' }}>main course (max 3):</span>{mainCourse.map((item) => ' ' + item + ', ')} </p>
                    <p><span style={{ fontWeight: 'bold' }}>second course (max 3):</span> {secondCourse.map((item) => ' ' + item + ', ')} </p>
                    <p><span style={{ fontWeight: 'bold' }}>side dish (max 1):</span> {sideDish} </p>
                    <div className="formBtn">
                        <button type="button" className="btn"
                            onClick={() => { onGenerate(activeStep === 1 ? mainCourse : activeStep === 2 ? secondCourse : sideDish) }}
                            disabled={mainCourse.length === 3 && activeStep === 1 ||
                                secondCourse.length === 3 && activeStep === 2 ||
                                sideDish !== '' && activeStep === 3}>GENERATE</button>
                    </div>
                </form>
                <div className="steps row ">
                    <button type="button" className="btn  col-6"
                        disabled={activeStep === 1}
                        onClick={() => { setActiveStep(activeStep - 1) }}>Previous step</button>

                    <button type="button" className="btn  col-6 "
                        disabled={activeStep === 3 && mainCourse.length === 0 && secondCourse.length === 0 && sideDish === ''}
                        onClick={() => { activeStep !== 3 ? setActiveStep(activeStep + 1) : onComplete(mainCourse, secondCourse, sideDish) }}>{activeStep === 3 ? 'Complete' : 'Next step'}</button>
                </div>
            </div>

        </div>

    )
}