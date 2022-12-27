import './style.css'

type Props = {
   text: String
   bg : String
}

function ButtonActions({text, bg}:  Props): JSX.Element {



   return (
      <>
         <button style={{color: `${bg}`}}>
            <span>{text}</span>
         </button>
      </>
   );
}

export default ButtonActions;