import { useState, useContext } from "react";
import { ContextSearch } from "../../utils/context-search";
import './style.scss'



function SearchBar() {


   const {setContextSearch} = useContext(ContextSearch);

   function handleChange(event: any) {
      setContextSearch(event.target.value)
      console.log(event.target.value)
   }

   function handleSubmit(event: any) {
      event.preventDefault();
   }

   return (
      <form onSubmit={handleSubmit} className="from-search-bar">

         <input 
         onChange={handleChange} 
         name="onSearch"
         className="input-search"
         placeholder="Buscar por nome" type="text" /> 
         <button type="submit" className="from-search-bar-btn">🔎︎</button>
      
      </form>
   );
}

export default SearchBar;