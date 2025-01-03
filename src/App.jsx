import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Componant/Layout/Layout"
import Home from "./pages/Home/Home"
import Blog from "./pages/Blog/Blog"
import Login from "./pages/Login"
import Bootcamp from "./pages/Bootcamp"

function App() {
 
  return (
         <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout><Home /></Layout>} />
                  <Route path="/blog" element={<Layout><Blog /></Layout>} />
                  <Route path="/bootcamp" element={<Layout><Bootcamp /></Layout>} />

                  <Route path="/login" element={<Login />} />
              </Routes>
          </BrowserRouter>
        
        </>
  )
}

export default App
