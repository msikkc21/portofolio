import { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Popup from './Components/Popup'
import ScrollToTop from './Components/ScrollToTop'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Portofolio from './Sections/Portofolio'
import Skills from './Sections/Skills'
import Certificates from './Sections/Certificates'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

function App() {
  // Tambahkan class dark ke html saat pertama kali load (memastikan dark mode default)
  useEffect(() => {
    // Cek apakah ada tema yang tersimpan di localStorage
    const savedTheme = localStorage.getItem('theme');
    // Jika tidak ada tema tersimpan atau temanya adalah 'dark', set dark mode
    if (!savedTheme || savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  return (
    <div className='font-poppins dark:bg-[#051630] dark:text-white bg-gray-50 text-gray-900'>
      {/* Scroll to Top Component */}
      <ScrollToTop />
      
      {/* Navbar Start */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 dark:bg-[#051630]/80 backdrop-blur-md shadow-sm transition-all duration-500 ease-in-out">
        <Navbar />
      </div>
      {/* Navbar End */}
      
      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-20"></div>
      
      {/* Hero Section Start */}
      <div className='bg-gradient-to-r from-[#0062CC] to-[#007BFF] dark:from-[#001E43] dark:to-[#003366] transition-all duration-700 ease-in-out'>
        <div className="relative">
          <div className="absolute inset-0 bg-white/10 dark:bg-black/10 transition-all duration-700 ease-in-out"></div>
          <Hero id='home'/>
        </div>
      </div>
      {/* Hero Section End */}
      
      {/* About Section Start */}
      <div className="animate-slideUp" style={{animationDelay: '200ms'}}>
        <About id='about'/>
      </div>
      {/* About Section End */}
      
      {/* Portfolio Section Start */}
      <div className='bg-gray-50 dark:bg-[#001A3A] animate-slideUp relative' style={{animationDelay: '300ms'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-gray-50/80 dark:from-[#001E43]/50 dark:to-[#001A3A]/100 transition-all duration-500"></div>
        <div className="relative z-10">
          <Portofolio id='portfolio'/>
        </div>
      </div>
      {/* Portfolio Section End */}
      
      {/* Skills Section Start */}
      <div className="animate-slideUp" style={{animationDelay: '400ms'}}>
        <Skills id='skills'/>
      </div>
      {/* Skills Section End */}
      
      {/* Certificates Section Start */}
      {/* <div className='bg-gray-100 dark:bg-[#001A3A] animate-slideUp' style={{animationDelay: '500ms'}}>
        <Certificates id='certificates'/>
      </div> */}
      {/* Certificates Section End */}
      
      {/* Contact Section Start */}
      <div className="bg-gray-100 dark:bg-[#001A3A] animate-slideUp" style={{animationDelay: '500ms'}}>
        <Contact id='contact'/>
      </div>
      {/* Contact Section End */}
      
      {/* Footer Section Start */}
      <Footer/>
      {/* Footer Section End */}
    </div>
  )
}

export default App
