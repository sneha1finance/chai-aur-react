import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoloader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   // createBrowserRouter is a method which takes array
//   // Before we have to do outlet in Layout .jsx

//   {
//    path:'/',
//    element:<Layout/>,
//    children:[
//     {
//       path:'',
//       // but defaut is takes all values from layout => / => for Home that comes from layout
//       element:<Home/>,
//     },
//     {
//       // /about
//       path:'about',
//       element:<About/>
    
//     },
//     {
//       // /contact
//       path:'contact',
//       element:<Contact/>
    
//     },
//    ]
//   }
// ])

// Another way of crating router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      {/* // for dynamically provide ids => we use useParams hooks */}
      <Route path='user/:userid' element={<User/>}/> 
      <Route 
      // loader on hover state itself it calls api which makes easier to handle and without any lagging => optimised way
      loader={githubInfoloader}
      path='github' 
      element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // as it takes props router */}
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
