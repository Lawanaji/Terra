import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Componant/Layout/Layout"
import Home from "./pages/Home/Home"
import Blog from "./pages/Blog/Blog"


function App() {
 
  return (
         <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout><Home /></Layout>} />
                  <Route path="/blog" element={<Layout><Blog /></Layout>} />
              </Routes>
          </BrowserRouter>
        
        </>
  )
}

export default App
