import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

import { ProSidebarProvider } from 'react-pro-sidebar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProSidebarProvider> 
    <App />
  </ProSidebarProvider>
)
