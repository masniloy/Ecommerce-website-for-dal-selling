import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Home from './Pages/Home/Home/Home';
import Pulses from './Pages/Home/Pulses/Pulses';
import MoreAbout from './Pages/Home/About/MoreAbout';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';
import PulsesDetails from './Pages/Home/Pulses/PulsesDetails';
import PrivateRout from './Pages/PrivateRout/PrivateRout';
import Contact from './Pages/Contact/Contact';
import MyOrder from './Pages/MyOrder/MyOrder';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/Pulses',
          loader: async () => {
            return fetch('https://ecommerce-website-for-dal-selling-server.vercel.app/products/')
          },
          element: <PrivateRout><Pulses></Pulses></PrivateRout>
        },
        {
          path: '/About',
          element: <MoreAbout></MoreAbout>
        },
        {
          path: '/Login',
          element: <Login></Login>
        },
        {
          path: '/Register',
          element: <Register></Register>
        },
        {
          path: '/Contact',
          element: <Contact></Contact>
        },
        {
          path: '/Cart',
          element: <PrivateRout><Cart></Cart></PrivateRout>
        },
        {
          path: '/Orders',
          element: <PrivateRout><MyOrder></MyOrder></PrivateRout>
        },
        {
          path: '/Pulses/:id',
          loader: async ({ params }) => {
            return fetch(`https://ecommerce-website-for-dal-selling-server.vercel.app/products/${params.id}`)
          },
          element: <PrivateRout><PulsesDetails></PulsesDetails></PrivateRout>
        },

      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
