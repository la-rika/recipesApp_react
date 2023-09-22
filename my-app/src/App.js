import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, Kitchen, Fridge, MyRecipes } from "./pages";

export const App = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage  />} />
                <Route path="/kitchen" element={<Kitchen />} />
                <Route path="/fridge" element={<Fridge />} />
                <Route path="/my-recipes" element={<MyRecipes />} />
            </Routes>
        </BrowserRouter>
    )
}