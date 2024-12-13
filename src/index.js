import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import Resume from './components/Resume';
import Contactme from './components/Contactme';
import Portfolio from './components/Portfolio';
import Error404 from './components/common/Error404';
let allRoutes=createBrowserRouter(
  [
  {
    path:"/reactfirstapp",
    element:<Home/>
  },
  {
    path:"about-us",
    element:<About/>
  },
  {
    path:"resume",
    element:<Resume/>
  },
  {
    path:"portfolio",
    element:<Portfolio/>
  },
  {
    path:"contactme",
    element:<Contactme/>
  },
  {
    path:"*",
    element:<Error404/>
  }
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={allRoutes}/>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
