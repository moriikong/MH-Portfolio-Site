import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./component/Layout"
import Home from "./screen/Home"
import About from "./screen/About"
import Contact from "./screen/Contact"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="contact" element={<Contact/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
