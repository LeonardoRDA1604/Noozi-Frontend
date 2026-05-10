import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import "../index.css"
import ProductPage from "@/pages/Products/Products"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/listaProdutos" element={<ProductPage/>} />
        {/*<Route path="/new-product" element={<NewProduct />} /> */}
      </Routes>
    </BrowserRouter>
  )
}