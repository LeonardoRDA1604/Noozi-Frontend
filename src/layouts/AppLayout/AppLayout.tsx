import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-noozi-background">
      <Header onMenuOpen={() => setSidebarOpen(true)} />

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* pt-14 = altura do Header | pb-16 = altura do Footer no mobile */}
      <main className="pt-14 pb-16 lg:pb-0">
        <Outlet /> {/* recebe o conteúdo das páginas/rotas nesse layout */}
      </main>

      <Footer />
    </div>
  );
}