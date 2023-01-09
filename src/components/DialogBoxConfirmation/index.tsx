
import './style.scss'

type Props = {
   id: number,
   msg: string,
   onDialogAnswer: Function
}

function DialogBoxConfirmation({ id, msg, onDialogAnswer }: Props) {
   return (
      <div className="dialog-bg-container" onClick={() => onDialogAnswer(false, id)}>
         <div className="dialog-box" onClick={(event) => event.stopPropagation() }>
            <h2>{msg}</h2>
            <div className="dialog-card ">
               <div className='mx-20' onClick={() => onDialogAnswer(false, id)}>
                  <button  >Não</button>
               </div>
               <div className='mx-20 box-btn-y' onClick={() => onDialogAnswer(true, id)}>
                  <button >Sim</button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default DialogBoxConfirmation;