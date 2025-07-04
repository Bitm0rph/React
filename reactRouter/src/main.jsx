import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import Layout from './Layout.jsx'
import User from './User/User.jsx'
import Github from './components/Github/Github.jsx'
import GithubInfo from './components/Github/GithubInfo.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: '/about',
//         element: <About/>
//       },
//       {
//         path: '/contact_us',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact_us' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route
      loader={GithubInfo}
      path='github' 
      element={<Github/>}
      />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
