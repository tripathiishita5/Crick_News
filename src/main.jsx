import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './utility/AppStore';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
   
  </React.StrictMode>,
)
