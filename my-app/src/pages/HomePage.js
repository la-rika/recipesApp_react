import React from "react";
import salad from "../images/salad.png"

export const HomePage = () => {
    return (
        <div className="container">
            <div className="row home-container d-flex align-items-center">
                <div className="col-5">
                    <img src={salad} alt="logo-img" width="400px" height="400px" />
                </div>
                <div className="col-7 home-text">
                    <h1>About us</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, ex, impedit dolore dolorem ipsum iste natus expedita esse architecto, aliquam commodi eum porro! Voluptates accusantium, ex animi dolor esse quidem quibusdam aut est non reprehenderit at natus blanditiis ullam odio minima necessitatibus hic inventore corrupti rerum quo nostrum officia itaque assumenda quia! Suscipit aspernatur nam laborum eligendi iusto ipsa incidunt nobis odit eius quas expedita quo accusantium ad sit, provident accusamus dolore laudantium eos et vel totam excepturi! Ut vitae, tempore excepturi perferendis praesentium quod amet aperiam molestiae libero, ab quae tempora aspernatur architecto eos vel pariatur aut maxime ipsam.</p>
                </div>
            </div>
        </div>
    )
}