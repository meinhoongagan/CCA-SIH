import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import Store from './Store/Store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import CareerCounselling from './pages/CareerCounselling.jsx'
import CareerExplorer from './pages/CareerExplorer.jsx'
import Resources from './pages/Resources.jsx'
import Mentorship from './pages/Mentorship.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='CareerCounselling' element={<CareerCounselling/>} />
      <Route path='CareerExplore' element={<CareerExplorer/>} />
      <Route path='Resources' element={<Resources/>} />
      <Route path='Mentorship' element={<Mentorship/>} />
      <Route path='login' element={<Login/>} />
    </Route>
  )
) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
  </StrictMode>
)
