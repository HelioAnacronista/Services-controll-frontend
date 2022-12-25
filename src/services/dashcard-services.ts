import axios, { AxiosRequestConfig } from 'axios';

import { BASE_URL } from '../utils/system';

export function getRequstVendas() {
   return axios.get(`${BASE_URL}/work/totalvalue`);
}

export function getRequstGastos() {
   return axios.get(`${BASE_URL}/expense/totalvalue`);
}

export function getTotal(){
   return axios.get(`${BASE_URL}/accounting/total`)
}

/*
export function getVendasData() {
   let gastos: number;
   getRequstVendas().then(res => {
      getRequstGastos().then(res => {
         gastos = res.data;
      })
      const vendas = res.data;
      let total = vendas - gastos;
      let pVendas = (vendas / total) * 100;
      return {
         total : vendas,
         pVendas : pVendas
      }
   })
}
*/





