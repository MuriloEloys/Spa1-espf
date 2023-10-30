import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Produtos from './routes/Produto.jsx'
import EditarProdutos from './routes/EditarProdutos.jsx'
import Erro404 from './routes/Erro404.jsx'
import ExcluirProdutos from './routes/ExcluirProdutos.jsx'
import Login from "./routes/Login/Login.jsx"

const router = createBrowserRouter([
  {path:"/",element: <App/>, errorElement:<Erro404/>,
  children:[
    {path:"/", element:<Home/>},
    {path:"/produtos", element:<Produtos/>},
    {path:"/editar/produtos/:id", element:<EditarProdutos/>},
    {path:"/excluir", element:<ExcluirProdutos/>},
    {path:"/login",element:<Login/>},
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
