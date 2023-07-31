import React, { useEffect, useState } from "react";
import images from "../indexImg";
import { PhotoTextCard } from "../components/PhotoTextCard";
import { SearchInput } from "../components/SearchInput";
import { useSelector, useDispatch } from "react-redux";
import { dropDownFilterAdd, increase } from "../redux/reducers/filters";
export const Fridge = () => {

    const [item, setItem] = useState('');

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('dropDownFilter'));
        if (items) {
            setItem(items);
            console.log(items)
        }
    }, []);


    return (
        <div className="container fridge-container ">
            <SearchInput
                filtered={true} />

            <div className="row food-cards gy-5">
                {item ?
                    images.map((elem, index) => {
                        if (index !== 0 && elem.src.includes(item)) {
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
                    })}
            </div>

        </div>
    )
}