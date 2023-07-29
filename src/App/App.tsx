import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Pages/Home'
import MyAccount from '../Pages/MyAccount'
import MyOrder from '../Pages/MyOrder'
import MyOrders from '../Pages/MyOrders'
import NotFound from '../Pages/NotFound'
import SingIn from '../Pages/SingIn'
import Nabvar from '../Components/Navbar/Nabvar'
import Layout from '../Components/Layout/Layout'

import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/sign-in', element: <SingIn />},
    { path: '/*', element: <NotFound />},
  ])

  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <Nabvar />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
