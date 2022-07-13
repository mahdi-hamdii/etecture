import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { IntlProvider } from 'react-intl'
import './index.css'
import getUserLocale from 'get-user-locale';

localStorage.setItem("visitedPage", "0")
const userLocale = getUserLocale();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider locale={userLocale} >
    <App />
    </IntlProvider> 
 </React.StrictMode>
)
