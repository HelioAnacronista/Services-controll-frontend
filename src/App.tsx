import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Category from './routers/Category';
import Client from './routers/Client';
import Dashboard from './routers/Dashboard';
import Home from './routers/Home';
import Login from './routers/Login';
import Work from './routers/Works';

import { useState } from 'react';
import { ContextSearch } from './utils/context-search';

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
              <Route path='category' element={<Category />} />
              <Route path='client' element={<Client params={contextSearch} />} />
              <Route path='work' element={<Work />} />
            </Route>



          </Routes>
        </BrowserRouter>
      </ContextSearch.Provider>
    </>
  )
}

export default App
