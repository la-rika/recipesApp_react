import React from "react";
import images from "../indexImg";
import { PhotoTextCard } from "../components/PhotoTextCard";
import { SearchInput } from "../components/SearchInput";

export const Fridge = () => {
    return (
        <div className="container fridge-container ">
            <SearchInput
                filtered={true} />

            <div className="row food-cards gy-5">
                {images[1].fruit.map((item) => {
                    return (
                        <PhotoTextCard
                            photo={item.src}
                            text={item.name} />
                    )
                })}
                {images[1].veggie.map((item) => {
                    return (
                        <PhotoTextCard
                            photo={item.src}
                            text={item.name} />
                    )
                })}
            </div>

        </div>
    )
}