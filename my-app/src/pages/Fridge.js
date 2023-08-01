import React, { useEffect, useState } from "react";
import images from "../indexImg";
import { SearchInput,PhotoTextCard, FiltersButtons } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { dropDownFilterAdd, dropDownFilterReset } from "../redux/reducers/filters";


export const Fridge = () => {
    const dispatch = useDispatch();
    const dropDownFilter = useSelector((state)=>state.filters.dropDownFilter)

    useEffect(()=>{
        dispatch(dropDownFilterReset())
    },[])

    const handleFilter = (event) => {
        if(window.location.href.includes('fridge')){
            event.preventDefault()
        }
        let filterName = '';
        switch (event.target.innerHTML) {
            case 'Fruits': {
                filterName = 'fruit';
                break;
            }
            case 'Vegetables': {
                filterName = 'veggie';
                break;
            }
            case 'Meat': {
                filterName = 'fruit';
                break;
            }
            case 'Bread': {
                filterName = 'fruit';
                break;
            }
            case 'Pasta': {
                filterName = 'fruit';
                break;
            }
            case 'Rice': {
                filterName = 'rice';
                break;
            }
            case 'Legumes': {
                filterName = 'fruit';
                break;
            }
            case 'Fish': {
                filterName = 'fish';
                break;
            }

            default:
                break;
        }
        dispatch(dropDownFilterAdd(filterName))
    }

    return (
        <div className="container fridge-container ">
            <FiltersButtons onClick={(e) => handleFilter(e)}/>
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