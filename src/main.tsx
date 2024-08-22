import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './app/App.tsx'
import Form from 'antd/es/form/Form'
import "../src/styles/index.scss";
//import ErrorPage from './pages/ErrorPage.tsx'

const router = createBrowserRouter([
  {
    path: "/form",
    element: <Form />
  },
{
  path: "/",
  element: <App/>,
 /* errorElement: <ErrorPage /> */
},
{
  path: "/card",
  element: <div>card ITEM</div>
},
{
  path: "/list",
  element: <App />
}

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
