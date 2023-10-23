import React, { useEffect, useState } from "react";
import settingsImg from "../images/settings.png"
import images from "../indexImg";
import axios from "axios";

export const Kitchen = () => {

    //courses with the generated foods
    const [mainCourse, setMainCourse] = useState([])
    const [secondCourse, setSecondCourse] = useState([])
    const [sideDish, setSideDish] = useState('')

    const [activeStep, setActiveStep] = useState(1);

    //filtered arrays base on the difference between courses
    const [allFood, setAllFood] = useState([])
    const [mainFood, setMainFood] = useState([]);
    const [secondFood, setSecondFood] = useState([]);
    const [sideFood, setSideFood] = useState([]);

    //arrays with names only of the foods
    const [mappingMainFood, setMappingMainFood] = useState([])
    const [mappingSecondFood, setMappingSecondFood] = useState([])
    
    //helping vars
    const allf = [];
    const mf = [];
    const sf = [];
    const sideD = []

    //post request with axios
    const axiosAddData = (data) => {
        axios.post('http://localhost:3001/kitchen', data)//quando fare la chiamata(dove) e cosa mandare
            .then(res => console.log(res.data))
            .catch(err => { console.log(err) })

    }

    useEffect(() => {
        images.forEach((item, index) => {
            if (index !== 0) {
                allf.push(item);
                if (item.src.includes('pasta-rice') || item.src.includes('veggie') && item.name !== 'lettuce' && item.name !== 'corn') {
                    mf.push(item)
                } 
                if (!item.src.includes('pasta-rice')&&!item.src.includes('fruit')||item.src.includes('dairy')) {
                    sf.push(item)
                }
                if (item.src.includes('fruit') || item.src.includes('veggie')||item.src.includes('ice-cream')) {
                    sideD.push(item)
                }
            }
        })
        setAllFood(allf)
        setMainFood(mf)
        setSecondFood(sf);
        setSideFood(sideD)
    }, [])

    const showIngredients = (foodArray) => {
        const array = [];
        foodArray.forEach(item => {
            array.push(item.name)
        })
        if (foodArray === mainCourse) {
            setMappingMainFood(array);
        }else if(foodArray===secondCourse){
            setMappingSecondFood(array)
        }
    }


    const onGenerate = (currentCourse, currentFood) => {
        if (currentCourse.length < 3) {
            let course = currentFood[Math.floor(Math.random() * currentFood.length)];
            let mc = mainCourse || [];
            let sc = secondCourse || [];
            let sd = sideDish || ''
            switch (currentCourse) {
                case mainCourse: {
                    if (mainCourse.find(item => item.src.includes('pasta-rice'))) {
                        if (course.src.includes('pasta-rice')) {
                            onGenerate(mainCourse, mainFood)
                        } else {
                            if (!mainCourse.find(item => item === course)) {
                                mc.push(course)

                            } else {
                                onGenerate(mainCourse, mainFood)
                            }
                        }
                    } else {
                        if (course.src.includes('pasta-rice')) {
                            mc.push(course)
                        } else {
                            onGenerate(mainCourse, mainFood)
                        }
                    }
                    setMainCourse(mc);
                    showIngredients(currentCourse)
                    break;
                }
                case secondCourse: {
                    if (!secondCourse.find(item => item === course)) {
                        sc.push(course)

                    } else {
                        onGenerate(secondCourse, secondFood)
                    }
                    setSecondCourse(sc);
                    showIngredients(currentCourse)
                    break;
                }
                case sideDish: {
                    setSideDish(course.name);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }

    const onComplete = (mainCourse, secondCourse, sideDish) => {
        let currentDate = new Date().toJSON().slice(0, 10);

        const payload = {
            mainCourse: mainCourse,
            secondCourse: secondCourse,
            sideDish: sideDish,
            creationDate: currentDate
        }

        axiosAddData(payload)
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
                    <img className="settingsImgKitchen" src={settingsImg} alt="filters-img" width="35px" height="35px" style={{ visibility: 'hidden' }} />
                    <p><span style={{ fontWeight: 'bold' }}>main course (max 3):</span>{ mappingMainFood.map(item => ' ' + item + ', ')}</p>
                    <p><span style={{ fontWeight: 'bold' }}>second course (max 3):</span> { mappingSecondFood.map((item) => ' ' + item + ', ')} </p>
                    <p><span style={{ fontWeight: 'bold' }}>side dish (max 1):</span> {sideDish} </p>
                    <div className="formBtn">
                        <button type="button" className="btn"
                            onClick={() => {
                                activeStep === 1 ?
                                    onGenerate(mainCourse, mainFood) : activeStep === 2 ?
                                        onGenerate(secondCourse, secondFood) : onGenerate(sideDish, sideFood)
                            }}
                            disabled={mainCourse.length === 3 && activeStep === 1 ||
                                secondCourse.length === 3 && activeStep === 2 ||
                                sideDish !== '' && activeStep === 3}>GENERATE</button>
                    </div>
                </form>
                <div className="steps row ">
                    <button type="button" className="btn  col-6"
                        disabled={activeStep === 1}
                        onClick={() => { setActiveStep(activeStep - 1)}}>Previous step</button>

                    {activeStep !== 3 ? (
                        <button type="submit" className="btn  col-6 "
                            disabled={mainCourse.length === 0 && secondCourse.length === 0 && sideDish === ''}
                            onClick={() => { setActiveStep(activeStep + 1)}}>Next step</button>
                    ) : (
                        <button type="submit" className="btn  col-6" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                            disabled={activeStep === 3 && mainCourse.length === 0 && secondCourse.length === 0 && sideDish === ''}
                            onClick={() => onComplete(mainCourse, secondCourse, sideDish)}>Complete</button>
                    )}
                </div>
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel" style={{ marginLeft: '15px' }}>Recipe successfully saved !</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ width: '0px', height: '0px', marginRight: '15px' }}
                                onClick={() => window.location.reload()}></button>
                        </div>
                        <div className="modal-body">
                            Click <b>STAY</b> to create another recipe or <b>LEAVE</b> to see all the recipes that you created.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn modal-button" data-bs-dismiss="modal" onClick={() => window.location.reload()}>STAY</button>
                            <button type="button" className="btn modal-button" onClick={() => window.location.replace('/my-recipes')}>LEAVE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}