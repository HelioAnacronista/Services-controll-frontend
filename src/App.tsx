import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Category from './routers/Category';
import CategoryFrom from './routers/Category/CategoryFrom';
import Client from './routers/Client';
import ClientFrom from './routers/Client/ClientFrom';
import Dashboard from './routers/Dashboard';
import Home from './routers/Home';
import Login from './routers/Login';
import Work from './routers/Works';
import WorkDetails from './routers/Works/WorkDetails';
import WorkFrom from './routers/Works/WorkFrom';
import { ContextSearch } from './utils/context-search';

import { Container } from "./styles/global";

function App() {

  const [contextSearch, setContextSearch] = useState<any>();

  return (
    <>
    <Container />
      <ContextSearch.Provider value={{ contextSearch, setContextSearch }}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login></Login>}> </Route>
            <Route path='' element={<Home></Home>} >
              <Route index element={<Dashboard />} />

              <Route path='category' element={<Category params={contextSearch} />} />
              <Route path='category/:categoryId' element={<CategoryFrom />} /> 

              <Route path='client' element={<Client params={contextSearch} />} />
              <Route path='client/:clientId' element={<ClientFrom />} />

              <Route path='work' element={<Work params={contextSearch} />} />
              <Route path='work/:workId' element={<WorkFrom />} />
              <Route path='work-details/:workId' element={<WorkDetails />} /> 
            </Route>



          </Routes>
        </BrowserRouter>
      </ContextSearch.Provider>
    </>
  )
}

export default App
