import ButtonActions from '../ButtunActions';
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
                  <ButtonActions  bg={"rgb(255, 119, 130)"} text="Não"></ButtonActions>
               </div>
               <div className='mx-20 box-btn-y' onClick={() => onDialogAnswer(true, id)}>
                  <ButtonActions bg={"#7380EC"} text="Sim"></ButtonActions>
               </div>
            </div>
         </div>
      </div>
   );
}

export default DialogBoxConfirmation;