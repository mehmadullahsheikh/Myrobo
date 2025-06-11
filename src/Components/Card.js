import React from "react";

const Card = ({id,name,email})=>{
    return (
     <div className=" tc bg-light-green dib br2 pa2 ma2 grow shadow-5">
        <img src={`https://robohash.org/${id}?100x100/`} alt="photo-" />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
     </div>
    );
}
export default Card;