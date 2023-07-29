import Home from '../Pages/Home'
import MyAccount from '../Pages/MyAccount'
import MyOrder from '../Pages/MyOrder'
import MyOrders from '../Pages/MyOrders'
import NotFound from '../Pages/NotFound'
import './App.css'

function App() {
  return (
    <>
      <h1 className='text-rose-500 '>Hi, klich 84</h1>
      <hr />
      <Home />
      <hr />
      <MyAccount />
      <hr />
      <MyOrders />
      <hr />
      <MyOrder />
      <hr />
      <NotFound />

    </>
  )
}

export default App
