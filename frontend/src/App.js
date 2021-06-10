import "./App.css"
import MainScreen from "./components/MainScreen/MainScreen"
import Header from "./components/Header"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from "./components/Footer.js"
import GalleryScreen from "./components/GalleryScreen/GalleryScreen"
import BioScreen from "./components/BioScreen/BioScreen"

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Route path='/' component={MainScreen} exact />
            <Route path='/product/:id' component={GalleryScreen} />
            <Route path='/BioScreen' component={BioScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
