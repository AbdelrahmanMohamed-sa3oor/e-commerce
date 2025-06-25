import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Products from './Components/Proucts/Products'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import NotFound from './Components/NotFound/NotFound'
import Brands from './Components/Brands/Brands'
import Layout from './Components/Loyout/Layout' 
import Home from './Pages/Home'
import Details from './Pages/Details/Details'
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage'
import Shopping from './Pages/Shopping/Shopping'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ShowAllProduct from './Components/ShowAllProduct/ShowAllProduct'
import Wishlist from './Pages/Wishlist/Wishlist'
import CartProducts from './Pages/CartProducts/CartProducts'
import InformationPerson from './Components/InformationPerson/InformationPerson'
const myRouter = createBrowserRouter(
  [
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'product', element: <Products /> },
        { path: 'Login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'details/:id', element: <Details /> },
        { path: 'Categories/:id', element: <CategoriesPage /> },
        { path: 'brands', element: <Brands /> },
        { path: '/Wishlist', element: <Wishlist/> },
        { path: 'ShoppingCart', element: <Shopping /> },
        { path: 'ShowAllProducts', element: <ShowAllProduct/>},
        { path: '/CartProducts', element: <CartProducts/> },
        


        { path: '*', element: <NotFound /> },
      ]
    }
  ]
)

function App() {
  
  const client = new QueryClient()


  return (
    <>
     <QueryClientProvider client={client}>
      <Provider store={store}>

          <RouterProvider router={myRouter} />
             <Toaster />

      </Provider>
      </QueryClientProvider>
    </>
  )
}

export default App
