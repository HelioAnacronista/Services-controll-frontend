import { ButtonStyleLayout } from "./style";


type Props = {
   name: string;
   img?: any
}


function ButtonLayout({ name, img }: Props): JSX.Element {
   return (

      <ButtonStyleLayout>
         <h1>{name}</h1>
         <div>
            {img}
         </div>
      </ButtonStyleLayout>
   );
}

export default ButtonLayout;