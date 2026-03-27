import { Header } from './Components/Header'
import { Comic } from './Pages/Comic'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Footer } from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"


function App() {

  return (
    <>
    <Header />
     <Comic />
     <About />
     <Contact />
     <Footer />
     <FaFacebook />
     <FaInstagram />
      <FaTwitter />
    </>
  )
}

export default App
