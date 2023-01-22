import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';

import App from './App';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProSidebarProvider>
    <App />
  </ProSidebarProvider>
);
