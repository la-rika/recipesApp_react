import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, Kitchen } from "./pages";

export const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route index element={<HomePage />} />
                    <Route path="kitchen" element={<Kitchen/>} />
                    <Route path="*" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}