import './style.scss'
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonLayout from "../../../components/ButtonLayout";
import { useEffect, useState } from "react";
import FromInput from "../../../components/FromInput";
import * as froms from '../../../utils/from'
import * as categoryServices from '../../../services/category-services'
import FromTextArea from "../../../components/FromTextArea";

function CategoryFrom() {

   const navigate = useNavigate();

   const buttonPropsSave = {
      name: 'Salvar',
      img: ''
   };

   const params = useParams();

   const isEditing = params.categoryId !== "create";

   const [formData, setFormData] = useState<any>({
      name: {
         value: "",
         id: "name",
         name: "name",
         type: "text",
         placeholder: "Escreva o nome da categoria",


      },
      description: {
         value: "",
         id: "description",
         name: "description",
         type: "text",
         placeholder: "Escreva uma descrição simples",


      }
   })

   //Atualizar os valores do fromData usando a função fromsUpdate
   useEffect(() => {
      if (isEditing) {
         categoryServices.findById(Number(params.categoryId))
            .then(res => {
               setFormData(froms.updateAll(formData, res.data))
            })
      }
   }, []);


   function handleInputChange(event: any) {
      setFormData(froms.update(formData, event.target.name, event.target.value));
   }

   function handleSubmit(event: any) {
      event.preventDefault();


      const requstBody = froms.toValues(formData);
      if (isEditing) {
         requstBody.id = params.categoryId;
      }

      const request = isEditing ?
         categoryServices.updateRequest(requstBody) : categoryServices.insertRequest(requstBody);

      request.then(() => {
         navigate("/category")
      })
   }

   return (
      <>
         <div className='mt-30 title-details'>
            <h1> <span>Criação de categoria:</span> </h1>
         </div>
         <div className='container div-c'>

            <div className='details-card-category style-card-details'>

               <form onSubmit={handleSubmit}>
                  <div className="text-top-category">
                     <div>
                        <h1>Nome: </h1>
                     </div>
                     <FromInput
                        {...formData.name}
                        className="input-c-c"
                        onChange={handleInputChange}
                     />
                     <div className="divide-text"></div>
                  </div>
                  <div className='text-top-category txt-area-dsc'>
                     <div>
                        <h1>Descrição:</h1>
                     </div>
                     <FromTextArea
                        {...formData.description}
                        className="input-c-c-txa"
                        onChange={handleInputChange}
                     />
                  </div>
                  <ButtonLayout {...buttonPropsSave}>SALVAR</ButtonLayout>
               </form>

            </div>

         </div>
         <div className="container mt-20 div-c">
            <Link to={"/category"}>
               <ButtonLayout name="CANCELAR"></ButtonLayout>
            </Link>
         </div>
      </>
   );
}

export default CategoryFrom;