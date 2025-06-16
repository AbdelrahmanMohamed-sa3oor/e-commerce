import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Products from './Components/Proucts/Products'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import NotFound from './Components/NotFound/NotFound'
import Brands from './Components/Brands/Brands'
import Layout from './Components/Loyout/Layout'
import {AuthProvider} from './Context/Auth'
import Home from './Pages/Home'
import Details from './Pages/Details/Details'
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage'
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart'
import InformationPerson from './Pages/InformationPerson/InformationPerson'

const myRouter=createBrowserRouter(
  [
    {path:'/',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'product',element:<Products/>},
      {path:'Login',element:<Login/>},
      {path:'register',element:<Register/>},
      {path:'details/:id',element:<Details/>},
      {path:'Categories/:id',element:<CategoriesPage/>},
      {path:'brands',element:<Brands/>},
      {path:'ShoppingCart',element:<ShoppingCart/>},
      {path:'InformationPerson',element:<InformationPerson/>},


      {path:'*',element:<NotFound/>},
    ]}
  ]
)

function App() {



  return (
    <>
    <AuthProvider>
      <RouterProvider router={myRouter} />
    </AuthProvider>
    </>
  )
}

export default App
