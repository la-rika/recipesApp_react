import React, { useEffect, useState } from "react";
import images from "../indexImg";
import { PhotoTextCard } from "../components/PhotoTextCard";
import { SearchInput } from "../components/SearchInput";
import { useSelector, useDispatch } from "react-redux";
import { increase } from "../redux/reducers/filters";
export const Fridge = () => {

    // const [item, setItem] = useState('');

    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('dropDownFilter'));
    //     if (items) {
    //         setItem(items);
    //         console.log(items)
    //     }
    // }, []);

    const dispatch = useDispatch()
    const item = useSelector((state)=> state.filters.dropDownFilter)

    return (
        <div className="container fridge-container ">
            <SearchInput
                filtered={true} />

                {/* <div>
                    <button onClick={dispatch(increase())}>+</button>
                    <p>{count}</p>
                </div> */}
                <p>{item}</p>

            <div className="row food-cards gy-5">
                {/* {item ?
                    images.map((elem, index) => {
                        if (index !== 0 && elem.src.includes('fruit')) {
                            return (
                                <PhotoTextCard photo={elem.src} text={elem.name} key={index} />
                            )
                        }
                    })
                    :
                    images.map((elem, index) => {
                        if (index !== 0) {
                            return (
                                <PhotoTextCard photo={elem.src} text={elem.name} />
                            )
                        }
                    })} */}
            </div>

        </div>
    )
}