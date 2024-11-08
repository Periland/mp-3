
import './App.css'
import Home from './components/home'
import Experience from './components/experience'
import Projects from './components/projects'
import Education from './components/education'
import Training from './components/training'
import Interests from './components/interests'
import Calculator from './components/calculator'
import {createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'

function Root() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/training" element={<Training/>} />
          <Route path="/interests" element={<Interests/>} />
          <Route path="/calculator" element={<Calculator/>} />
        </Routes>
    </>
  );
}

const router=createBrowserRouter(
  [
    {path:"*" , Component: Root}
  ]
)
export default function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}


