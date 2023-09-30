import React, { useEffect, useState } from "react";
import settingsImg from "../images/settings.png"
import images from "../indexImg";
import axios from "axios";

export const Kitchen = () => {

    const [mainCourse, setMainCourse] = useState([])
    const [secondCourse, setSecondCourse] = useState([])
    const [sideDish, setSideDish] = useState('')
    const [activeStep, setActiveStep] = useState(1);
    const [allFood, setAllFood] = useState([])
    let allf = []

    //post request with axios
    const axiosAddData = (data) => {
        axios.post('http://localhost:3001/kitchen', data)//quando fare la chiamata(dove) e cosa mandare
            .then(res => console.log(res.data))
            .catch(err => { console.log(err) })

    }

    useEffect(() => {
            images.forEach((item, index) => {
                if (index !== 0) {
                    allf.push(item.name)
                }
            })
            setAllFood(allf)
    },[])

    const onGenerate = (currentCourse) => {
        if (currentCourse.length < 3) {
            //fare un find di un cibo che contiene le parole chiave per ogni portata e fare un random solo su quelli che corrispondono
            let course =  allFood[Math.floor(Math.random() * allFood.length)]

            switch (currentCourse) {
                case mainCourse: {
                    setMainCourse([...mainCourse, course]);
                    break;
                }
                case secondCourse: {
                        setSecondCourse([...secondCourse, course]);
                        break;
                }
                case sideDish: {
                    setSideDish(course);
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
    // console.log(useSelector((state)=> state.kitchen.newCourse))


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

                    {activeStep !== 3 ? (
                        <button type="submit" className="btn  col-6 "
                            disabled={mainCourse.length === 0 && secondCourse.length === 0 && sideDish === ''}
                            onClick={() => { setActiveStep(activeStep + 1) }}>Next step</button>
                    ) : (
                        <button type="submit" className="btn  col-6 "
                            disabled={activeStep === 3 && mainCourse.length === 0 && secondCourse.length === 0 && sideDish === ''}
                            onClick={() => onComplete(mainCourse, secondCourse, sideDish)}>Complete</button>
                    )}
                </div>
            </div>
            {/* snippet della modale, da aggiungere anche js da bootstrap */}
            {/* <div class="modal-body">
                <h2 class="fs-5">Popover in a modal</h2>
                <p>This <button class="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</button> triggers a popover on click.</p>
                <hr>
                    <h2 class="fs-5">Tooltips in a modal</h2>
                    <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
            </div> */}

        </div>

    )
}