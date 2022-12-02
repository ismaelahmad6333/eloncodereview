import './App.css'
import Hero from './components/Hero/Hero'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'
import GetStarted from './components/getStarted/GetStarted'
import Testimonial from './components/testimonial/Testimonial'
import Pricing from './components/pricing/Pricing'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <GetStarted />
      <Testimonial />
      <Pricing />
      <Footer />
    </>
  )
}

export default App
