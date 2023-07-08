import React from "react";

export const PhotoTextCard = ({ photo, text }) => {
    return (

        <div className="col-lg-2 mb-5 text-center">
            <img src={photo} className="card-img-top foodImg" alt="..." />
            <div className="card-body">
                {text}
            </div>
        </div>
    )
}