import React from "react";


export const Navbar = () => {
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
                            <a className="nav-link" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="kitchen">KITCHEN</a>
                            
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/fridge" role="button"
                                aria-expanded="false">FRIDGE</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">All</a></li><br />
                                <li><a className="dropdown-item" href="#">Fruits</a></li><br />
                                <li><a className="dropdown-item" href="#">Vegetables</a></li><br />
                                <li><a className="dropdown-item" href="#">Meat</a></li><br />
                                <li><a className="dropdown-item" href="#">Bread</a></li><br />
                                <li><a className="dropdown-item" href="#">Pasta and Rice</a></li><br />
                                <li><a className="dropdown-item" href="#">Legumes</a></li><br />
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/my-recipes">MY RECIPES</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

