import React, { useEffect, useState } from "react";
import images from "../indexImg";
import { PhotoTextCard } from "../components/PhotoTextCard";
import { SearchInput } from "../components/SearchInput";
import { useSelector, useDispatch } from "react-redux";


export const Fridge = () => {

    const dropDownFilter = useSelector((state)=>state.filters.dropDownFilter)

    return (
        <div className="container fridge-container ">
            <SearchInput
                filtered={true} />

            <div className="row food-cards gy-5">
                {dropDownFilter ?
                    images.map((elem, index) => {
                        if (index !== 0 && elem.src.includes(dropDownFilter)) {
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