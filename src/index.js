import React from 'react'; /*nos permite usar todo el poder de react */
import ReactDOM from 'react-dom/client'; /*nos permite interactuar con la estructura de nuestra pagina web*/
import './index.css';
import App from './App'; /* lo importamos para poder crear la app principal*/
import { BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals