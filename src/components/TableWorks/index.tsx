import axios from 'axios'
import './style.scss'
import { useEffect, useMemo, useState } from 'react';
import Table from '../Table';

const myData = [
   {
      name: "Produto 1",
      number: "123456",
      payment: "Cartão de crédito",
      status: "Pago",
      details: "Detalhes do produto 1"
   },
   {
      name: "Produto 2",
      number: "789012",
      payment: "Boleto",
      status: "Aguardando pagamento",
      details: "Detalhes do produto 2"
   },
   {
      name: "Produto 3",
      number: "456789",
      payment: "Cartão de crédito",
      status: "Pago",
      details: "Detalhes do produto 3"
   },
   {
      name: "Produto 4",
      number: "987654",
      payment: "Boleto",
      status: "Aguardando pagamento",
      details: "Detalhes do produto 4"
   },
   {
      name: "Produto 5",
      number: "246810",
      payment: "Cartão de crédito",
      status: "Pago",
      details: "Detalhes do produto 5"
   },
   {
      name: "Produto 6",
      number: "135792",
      payment: "Boleto",
      status: "Aguardando pagamento",
      details: "Detalhes do produto 6"
   }
];




function TableWorks() {


   const columns = [
      {
         id: "name",
         Header: "Nome do Produto",
         accessor: "name"
      },
      {
         id: "number",
         Header: "Nº do Produto",
         accessor: "number"
      },
      {
         id: "payment",
         Header: "Pagamento",
         accessor: "payment"
      },
      {
         id: "status",
         Header: "Status",
         accessor: "status"
      },
      {
         id: "details",
         Header: "Detalhes",
         accessor: "details"
      }
   ];
    



   return (
      <>
         <div className="container-table">
            <Table columns={columns} data={myData} />
         </div>
      </>
   );
}

export default TableWorks;