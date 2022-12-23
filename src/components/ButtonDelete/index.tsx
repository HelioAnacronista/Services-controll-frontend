import { MdDeleteForever } from "react-icons/md";

function ButtonDelete() {
   return (  
      <button className="btn-action-style" style={{color: '#FF7782'}}>
         <MdDeleteForever></MdDeleteForever>
      </button>
   );
}

export default ButtonDelete;