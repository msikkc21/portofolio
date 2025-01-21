import Navbar from './Components/Navbar'
import Popup from './Components/Popup'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Portofolio from './Sections/Portofolio'
import Skills from './Sections/Skills'
import Footer from './Sections/Footer'

function App() {

  return (

    
    <div className='font-poppins dark:bg-[#030E3B] dark:text-white transition-all duration-300 ease-in-out'>
      {/* Navbar Start */}
        <Navbar/>
      {/* Navbar End
      {/* Hero Section Start */}
      <div className='bg-[#57A8FF] dark:bg-[#002D5E]'>
        <Hero id='home'/>
      </div>
      {/* Hero Section End */}
      {/* About Section Start */}
        <About id='about'/>
      {/* About Section End */}
      {/* Portfolio Section Start */}
      <div className='bg-[#002D5E] dark:bg-[#002247]'>
        <Portofolio id='portfolio'/>
      </div>
      {/* Portfolio Section End */}
      {/* Skills Section Start */}
        <Skills id='skills'/>
      {/* Skills Section End */}
      {/* Footer Section Start */}
        <Footer/>
        <div className='h-2'></div>
      {/* Footer Section End */}
      
    </div>
  )
}

export default App
