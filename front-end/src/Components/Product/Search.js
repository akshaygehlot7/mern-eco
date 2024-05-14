import React, { useState } from 'react'
import "./Search.css";
import { useNavigate } from 'react-router-dom';
import MetaData from "../Layout/MetaData"
const Search = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler =(e)=>{
        e.preventDefault();
        if(keyword.trim()){
            navigate(`/products/${keyword}`);
        }else{
            navigate("/products");
        }
    }
  return (
    <div>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default Search
