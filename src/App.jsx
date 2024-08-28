import { useState } from 'react'
import PortfolioCard from './components/PortfolioCard'

const data = [
  {
    id: 1,
    title: 'I Secret',
    img: 'assets/isecret.png',
    alt: 'Website I Secret'
  },
  {
    id: 2,
    title: 'I Secret',
    img: 'assets/isecret.png',
    alt: 'Website I Secret'
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-poppins max-w-screen-lg mx-auto'>
      {/* Hero Section Start */}
      <section className='py-10 px-5 font-poppins flex flex-wrap'>
        <div className='flex-none my-auto'>
          <h1 className='text-blue-700 font-bold text-lg md:text-xl'>Halo Semua 👋, Saya</h1>
          <h2 className='text-black font-bold text-2xl md:text-3xl pt-2'>Muhammad Sulthonul Izza</h2>
          <p className='font-bold text-slate-600 text-sm md:text-md pt-1 mb-6'>Informatics Engineering Student <span className='font-medium'>& Front-End Developer</span></p>
          <a href="https://wa.me/+6289509558484" className='p-3 bg-green-600 rounded-full font-semibold text-white hover:bg-green-500 transition-all duration-200 ease-in-out'>Hubungi Saya</a>
        </div>
        <div className='w-72 mx-auto'>
          <img src="assets/foto_profil_br.png" alt="Profil Picture" className='my-10 md:my-auto w-full border-4 border-blue-600 rounded-full'/>
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Section Start */}
        <section className='py-5 px-5'>
          <h1 className='text-center text-2xl font-bold'>About Me</h1>
          <p className=' text-md font-medium pt-2'>
            Nama saya Muhammad Sulthonul Izza.<br/>
            Saya sedang berkuliah di Universitas Negeri Semarang Program Studi Teknik Informatika
          </p>
        </section>
      {/* About Section End */}
      {/* Portfolio Section Start */}
      <section className='py-10 px-5'>
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
    </div>
  )
}

export default App
