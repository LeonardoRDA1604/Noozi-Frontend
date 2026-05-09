import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <>
    <Header/>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-blue-500">
          Noozi
        </h1>
      </div>
    <Footer/>
    </>
  )
}