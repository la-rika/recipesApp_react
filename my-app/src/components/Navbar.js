import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dropDownFilterAdd } from "../redux/reducers/filters";


export const Navbar = () => {

    const dispatch = useDispatch();
    const dropDownFilter = useSelector(state => state.filters.dropDownFilter)
    const [item, setItem] = useState('');

    useEffect(() => {
        setItem(dropDownFilter)
        localStorage.setItem('dropDownFilter', JSON.stringify(dropDownFilter));
        console.log(item)
    }, [dropDownFilter]);
        
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
                                <li><a className="dropdown-item" href="/fridge" onClick={()=>dispatch(dropDownFilterAdd('fruit'))}>Fruits</a></li><br />
                                <li><a className="dropdown-item" href="/fridge" >Vegetables</a></li><br />
                                <li><a className="dropdown-item" href="/fridge">Meat</a></li><br />
                                <li><a className="dropdown-item" href="/fridge">Bread</a></li><br />
                                <li><a className="dropdown-item" href="/fridge">Pasta and Rice</a></li><br />
                                <li><a className="dropdown-item" href="/fridge">Legumes</a></li><br />
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
            {dropDownFilter!==''&&
                <p>ciao</p>}
        </nav>
    )
}

