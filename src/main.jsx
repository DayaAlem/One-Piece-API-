import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './features/Store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById('root')
const root = createRoot(rootElement);

root.render ( 
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
