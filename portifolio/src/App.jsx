import {BrowserRouter } from 'react-router-dom'
import {About, Contact,Experience,Feedbacks,Hero,Navbar, Tech, Works,StarsCanvas } from './components'
import PortfolioAI from './components/PortifolioAI'


function App() {

  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar/>
            <Hero/>

          </div>
          <About/>
          <Experience/>
          <Works/>
          <Feedbacks/>
          <div className='relative z-0'>
            <Contact/>
            <StarsCanvas/>
            <PortfolioAI/>

          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
