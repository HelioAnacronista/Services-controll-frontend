import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Category from './routers/Category';
import Client from './routers/Client';
import Dashboard from './routers/Dashboard';
import Home from './routers/Home';
import Login from './routers/Login';
import Work from './routers/Works';
import WorkDetails from './routers/Works/WorkDetails';
import { ContextSearch } from './utils/context-search';
import CategoryFrom from './routers/Category/CategoryFrom';


const work = {
  id: 1,
  name: 'Projeto XYZ',
  status: 2,
  category: {
    id: 1,
    name: 'Desenvolvimento de software',
    description: 'Criação de aplicativos e sistemas personalizados'
  },
  client: {
    id: 1,
    name: 'Empresa ABC',
    phone: '12345678',
    address: 'Rua Tal, 123'
  },
  valor: 5000.00,
  pageable: {
    sort: {
      empty: false,
      unsorted: false,
      sorted: true
    },
    offset: 0,
    pageSize: 10,
    pageNumber: 0,
    paged: true,
    unpaged: false
  },
  totalPages: 1,
  size: 10,
  numberOfElements: 10
}


function App() {

  const [contextSearch, setContextSearch] = useState<any>();

  return (
    <>
      <ContextSearch.Provider value={{ contextSearch, setContextSearch }}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login></Login>}> </Route>
            <Route path='' element={<Home></Home>} >
              <Route index element={<Dashboard />} />
              <Route path='category' element={<Category params={contextSearch} />} />
              <Route path='category/:categoryId' element={<CategoryFrom />} /> 
              <Route path='client' element={<Client params={contextSearch} />} />
              <Route path='work' element={<Work params={contextSearch} />} />
              <Route path='work-details/:workId' element={<WorkDetails />} /> 
            </Route>



          </Routes>
        </BrowserRouter>
      </ContextSearch.Provider>
    </>
  )
}

export default App
