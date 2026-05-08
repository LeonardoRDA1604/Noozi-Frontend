import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Exemplos para novas rotas */}
        {/*         
        <Route path="/products" element={<Products />} />
        <Route path="/new-product" element={<NewProduct />} />
        */}
      </Routes>
    </BrowserRouter>
  )
}