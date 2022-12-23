import './style.scss'

type Props = {
   name: string;
   img?: any
}

function ButtonLayout({ name, img }: Props) {
   return (

      <button className="btn-layout">
         {name}
         <div className='btn-layout-icon'>
            {img}
         </div>
      </button>
   );
}

export default ButtonLayout;