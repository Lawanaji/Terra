import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Componant/Layout/Layout"
import Home from "./pages/Home/Home"


function App() {
 
  return (
         <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout><Home /></Layout>} />
                  
              </Routes>
          </BrowserRouter>
        
        </>
  )
}

export default App
