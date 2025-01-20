import Navbar from './Components/Navbar'
import Popup from './Components/Popup'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Portofolio from './Sections/Portofolio'
import Skills from './Sections/Skills'

function App() {

  return (

    
    <div className='font-poppins'>
      {/* Navbar Start */}
        <Navbar/>
      {/* Navbar End
      {/* Hero Section Start */}
      <div className='bg-[#57A8FF]'>
        <Hero/>
      </div>
      {/* Hero Section End */}
      {/* About Section Start */}
        <About/>
      {/* About Section End */}
      {/* Portfolio Section Start */}
      <div className='bg-gray-600'>
        <Portofolio/>
      </div>
      {/* Portfolio Section End */}
      {/* Skills Section Start */}
        <Skills/>
      {/* Skills Section End */}
    </div>
  )
}

export default App
