import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/layouts/AppLayout/AppLayout";
import Home from "@/pages/Home/Home";
import NewProduct from "@/pages/NewProduct/NewProduct"
import Products from "@/pages/Products/Products"
import Dashboard from "@/pages/Dashboard/Dashboard";
import Profile from "@/pages/Profile/Profile";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> {/* Layout envolve todas as rotas — Header, Footer e Sidebar vão aparecer em todas as rotas filho */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/new" element={<NewProduct />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}