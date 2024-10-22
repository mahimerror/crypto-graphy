import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import Home from './components/Home';
import Des from './components/Des';
import Test from './components/test';
import Des3 from './components/Des3';
import Aes from './components/Aes';
import BlowFish from './components/BlowFish';
import TowFish from './components/TwoFish';
import Rc4 from './components/Rc4';
import Rsa from './components/Rsa';
import Ecc from './components/Ecc';
import Md5 from './components/Md5';
import Sh1 from './components/Sh1.jsx';
import TcCrypto from './components/TcCrypto.jsx';
import Dsa from './components/Dsa.jsx';
import Dh from './components/Dh.jsx';
import Sh2 from './components/Sh2.jsx';
import Sh3 from './components/Sh3.jsx';
import RipeMD from './components/RipeMD.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/des",
        element: <Des></Des>
      },
      {
        path: "/des3",
        element: <Des3></Des3>
      },
      {
        path: "/aes",
        element: <Aes></Aes>
      },
      {
        path: "/blow-fish",
        element: <BlowFish></BlowFish>
      },
      {
        path: "/tow-fish",
        element: <TowFish></TowFish>
      },
      {
        path: "/rc4",
        element: <Rc4></Rc4>
      },
      {
        path: "/rsa",
        element: <Rsa></Rsa>
      },
      {
        path: "/ecc",
        element: <Ecc></Ecc>
      },
      {
        path: "/md5",
        element: <Md5></Md5>
      },
      {
        path: "/sh1",
        element: <Sh1></Sh1>
      },
      {
        path: "/tc",
        element: <TcCrypto></TcCrypto>
      },
      {
        path: "/dsa",
        element: <Dsa></Dsa>
      },
      {
        path: "/dh",
        element: <Dh></Dh>
      },
      {
        path: "/sh2",
        element: <Sh2></Sh2>
      },
      {
        path: "/sh3",
        element: <Sh3></Sh3>
      },
      {
        path: "/ripe",
        element: <RipeMD></RipeMD>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
