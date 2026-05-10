import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home/Home"
import NewProduct from "@/pages/NewProduct/NewProduct"
import Products from "@/pages/Products/Products"
import "../index.css"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />               
        <Route path="/products" element={<Products />} />
        <Route path="/new-product" element={<NewProduct />} />
      </Routes>
    </BrowserRouter>
  )
}