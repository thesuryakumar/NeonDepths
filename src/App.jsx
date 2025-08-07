
import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import PageHome from "./pages/PageHome"
import PageAbout from "./pages/PageAbout"
import PageContact from "./pages/PageContact"
import PageGallery from "./pages/PageGallery"
import PageEvents from "./pages/PageEvents"
import PageBooking from "./pages/PageBooking"
import Login from "./components/Login"
import Signup from "./components/Signup"

function AppLayout() {
  const location = useLocation()
  const isAuthPage = location.pathname === "/" || location.pathname === "/signup"

  return (
    <>
      {!isAuthPage && <Navbar />}
      <div style={{ marginTop: !isAuthPage ? "70px" : "0", minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="/gallery" element={<PageGallery />} />
          <Route path="/events" element={<PageEvents />} />
          <Route path="/book-tickets" element={<PageBooking />} />
        </Routes>
      </div>
      {!isAuthPage && <Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App
