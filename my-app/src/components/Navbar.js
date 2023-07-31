import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dropDownFilterAdd } from "../redux/reducers/filters";


export const Navbar = () => {

    const dispatch = useDispatch();

    const handleDropDown = (event) => {
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

            default:
                break;
        }
        dispatch(dropDownFilterAdd(filterName))
        event.preventDefault()
    }

    return (
        <nav className="navbar sticky-top navbar-expand-lg ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-pills nav-justified">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? '#9EB23B' : '',
                                        color: isActive ? 'white' : ''
                                    };
                                }}>HOME</NavLink>                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/kitchen'
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? '#9EB23B' : '',
                                        color: isActive ? 'white' : ''
                                    };
                                }}>KITCHEN</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to='/fridge'
                                role="button"
                                aria-expanded="false"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? '#9EB23B' : '',
                                        color: isActive ? 'white' : ''
                                    };
                                }}>FRIDGE</NavLink>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/fridge">All</a></li><br />
                                <li><a className="dropdown-item" href="/fridge" onClick={(e) => handleDropDown(e)} >Fruits</a></li><br />
                                <li><a className="dropdown-item" href="/fridge" onClick={(e) => handleDropDown(e)} >Vegetables</a></li><br />
                                <li><a className="dropdown-item" href="/fridge" onClick={(e) => handleDropDown(e)} >Meat</a></li><br />
                                <li><a className="dropdown-item" href="/fridge" onClick={(e) => handleDropDown(e)} >Bread</a></li><br />
                                <li><a className="dropdown-item" href="/fridge" onClick={(e) => handleDropDown(e)} >Pasta</a></li><br />
                                <li><a className="dropdown-item" href="/fridge" onClick={(e) => handleDropDown(e)} >Rice</a></li><br />
                                <li><a className="dropdown-item" href="/fridge" onClick={(e) => handleDropDown(e)} >Legumes</a></li><br />
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/my-recipes'
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? '#9EB23B' : '',
                                        color: isActive ? 'white' : ''
                                    };
                                }}>MY RECIPES</NavLink>                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

