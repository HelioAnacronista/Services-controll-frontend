import { useState } from "react";
import './style.scss'

type Props = {
   onSearch: Function;
}

function SearchBar({ onSearch }: Props) {

   const [text, setText] = useState("")

   function handleSubmit(event: any) {
      event.preventDefault();
      onSearch(text);
   }

   function handleChange(event: any) {
      setText(event.target.value)
   }

   return (
      <form onSubmit={handleSubmit} className="from-search-bar">

         <input className="input" type="text" value={text} onChange={handleChange} placeholder="Buscar por nome" /> 
         <button type="submit" className="from-search-bar-btn">🔎︎</button>
      
      </form>
   );
}

export default SearchBar;