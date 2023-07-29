import React from "react";
import images from "../indexImg";
import { PhotoTextCard } from "../components/PhotoTextCard";
import { SearchInput } from "../components/SearchInput";
import { useSelector, useDispatch } from "react-redux";

export const Fridge = () => {

    const dropDownFilter = useSelector((state) => state.filters.dropDownFilter)
    console.log(dropDownFilter)

    return (
        <div className="container fridge-container ">
            <SearchInput
                filtered={true} />

            <div className="row food-cards gy-5">
                {dropDownFilter !== '' ?
                    images.map((item, index) => {
                        if (index !== 0 && item.includes(dropDownFilter)) {
                            return (
                                <PhotoTextCard photo={item.src} text={item.name} />
                            )
                        }
                    })
                    :
                    images.map((item, index) => {
                        if (index !== 0) {
                            return (
                                <PhotoTextCard photo={item.src} text={item.name} />
                            )
                        }
                    })}
            </div>

        </div>
    )
}