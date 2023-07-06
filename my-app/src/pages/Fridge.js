import React from "react";
import images from "../indexImg";
import { PhotoTextCard } from "../components/PhotoTextCard";
import { SearchInput } from "../components/SearchInput";

export const Fridge = () => {
    return (
        <div className="container fridge-container ">

            <SearchInput
                filtered={true} />

            {images[1].fruit.forEach((item)=>{
                console.log('ciao')
            })}

            <PhotoTextCard
                photo={images[1].fruit[0].src}
                text={'item'} />

        </div>
    )
}