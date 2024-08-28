import PortfolioCard from './Components/PortfolioCard'

const data = [
  {
    id: 1,
    title: 'I Secret',
    img: 'src/assets/isecret.png',
    alt: 'Website I Secret'
  }
]

function App() {

  return (
    <div className='font-poppins max-w-screen-xl mx-auto'>
      {/* Navbar Start */}
        <div className="flex justify-between px-5 border-b-4 border-slate-300">
          <img src="src/assets/react.svg" alt="" className='w-10'/>
          <div className='flex h-full justify-between mr-8'>
            <a href="#about" className='p-5 text-md font-medium hover:bg-slate-300 transition-all duration-200 ease-in-out'>About</a>
            <a href="#portfolio" className='p-5 text-md font-medium hover:bg-slate-300 transition-all duration-200 ease-in-out'>Portfolio</a>
            <a href="#skills" className='p-5 text-md font-medium hover:bg-slate-300 transition-all duration-200 ease-in-out'>Skills</a>
          </div>
        </div>
      {/* Navbar End */}
      {/* Hero Section Start */}
      <section className='py-10 px-5 font-poppins flex flex-wrap justify-between'>
        <div className='flex-none my-auto'>
          <h1 className='text-blue-700 font-bold text-lg md:text-xl'>Halo Semua 👋, Saya</h1>
          <h2 className='text-black font-bold text-2xl md:text-3xl pt-2'>Muhammad Sulthonul Izza</h2>
          <p className='font-bold text-slate-600 text-sm md:text-md pt-1 mb-6'>Informatics Engineering Student <span className='font-medium'>& Front-End Developer</span></p>
          <a href="https://wa.me/+6289509558484" className='p-3 bg-green-600 rounded-full font-semibold text-white hover:bg-green-500 transition-all duration-200 ease-in-out'>Hubungi Saya</a>
        </div>
        <div className='w-72 mx-auto md:mx-0'>
          <img src="src/assets/foto_profil_br.png" alt="Profil Picture" className='my-10 md:my-auto w-full border-4 border-blue-600 rounded-full'/>
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Section Start */}
        <section id='about' className='py-5 px-5'>
          <h1 className='text-center text-2xl font-bold'>About Me</h1>
          <p className=' text-md font-medium pt-2'>
            Nama saya Muhammad Sulthonul Izza.<br/>
            Saya sedang berkuliah di Universitas Negeri Semarang Program Studi Teknik Informatika
          </p>
        </section>
      {/* About Section End */}
      {/* Portfolio Section Start */}
      <section id='portfolio' className='py-10 px-5'>
        <h1 className='text-center text-2xl font-bold pb-5'>My Portfolio</h1>
        <div className='grid gap-4 md:grid-cols-3'>
          {
            data.map((item) => (
              <PortfolioCard key={item.id} title={item.title} img={item.img} alt={item.alt}/>
            ))
          }
        </div>
      </section>
      {/* Portfolio Section End */}
      {/* Skills Section Start */}
      <section id='skills' className='py-10 px-5'>
        <h1 className='text-center text-2xl font-bold pb-16'>My Skills</h1>
        <div className='grid gap-16 grid-cols-2 md:grid-cols-5 justify-center'>
          <img src="src/assets/html5.svg" alt="" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="src/assets/css3.svg" alt="" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="src/assets/javascript.svg" alt="" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="src/assets/python.svg" alt="" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="src/assets/c++.png" alt="" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="src/assets/react.svg" alt="" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
        </div>
      </section>
      {/* Skills Section End */}
    </div>
  )
}

export default App
