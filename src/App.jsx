import { useState } from 'react'

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
          <img src={"assets/foto_profil_br.png"} alt="Profil Picture" className='my-10 md:my-auto w-full border-4 border-blue-600 rounded-full'/>
        </div>
      </section>
      {/* Hero Section End */}
    </div>
  )
}

export default App
