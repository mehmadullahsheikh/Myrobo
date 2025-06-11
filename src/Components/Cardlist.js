import React from "react";
import Card from "./Card";
const Cardlist = ({Robots}) => {
   return (
   <div>{
    Robots.map((user, i) => {
      
      return (
         <div className="dib">
            
         <Card 
             key={i}
             id={Robots[i].id}
             name={Robots[i].name}
             email={Robots[i].email}/>
         </div>
      );
       
    })
    }

   </div>
     
   );
   
}

export default Cardlist;