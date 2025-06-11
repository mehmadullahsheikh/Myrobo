import React from "react";

const SearchBox = ({searchchange}) =>{
    return (
      <div className="pa2">
        <input className="pa2 ba b--green  bg-lightest-blue tc" type="search" placeholder="search robots"  onChange={searchchange}/>
      </div>
    );
}
export default SearchBox;