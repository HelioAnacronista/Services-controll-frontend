import './style.scss'

type Props = {
   name: string;
   img?: any
}


function ButtonLayout({ name, img }: Props): JSX.Element {
   return (

      <button className="btn-layout btn-save">
         <h1>{name}</h1>
         <div className='btn-layout-icon btn-icon-test'>
            {img}
         </div>
      </button>
   );
}

export default ButtonLayout;