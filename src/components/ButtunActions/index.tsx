import './style.css'

type Props = {
   text: String
}

function ButtonActions({ text }: { text: string }): JSX.Element {
   return (
      <>
         <button className="">
            
            <span>{text}</span>
         </button>
      </>
   );
}

export default ButtonActions;