import Popup from './Components/Popup'
import PortfolioCard from './Components/PortfolioCard'

const data = [
  {
    id: 1,
    title: 'I Secret Website',
    img: 'assets/isecret.png',
    alt: 'Website I Secret',
    url: 'https://isecretilkom.org/projects',
    desc: 'I contributed to this project by creating the frontend part of the projects page using ReactJs and TailwindCSS.'
  }
]

function App() {

  return (
    <div className='font-poppins max-w-screen-xl mx-auto'>
      {/* Navbar Start */}
        {/* <div className="flex justify-between pl-5 border-b-4 border-slate-300">
          <img src="assets/react.svg" alt="" className='w-10'/>
          <div className='flex h-full justify-between md:mr-8'>
            <a href="#about" className='p-5 text-md font-medium hover:bg-slate-300 transition-all duration-200 ease-in-out'>About</a>
            <a href="#portfolio" className='p-5 text-md font-medium hover:bg-slate-300 transition-all duration-200 ease-in-out'>Portfolio</a>
            <a href="#skills" className='p-5 text-md font-medium hover:bg-slate-300 transition-all duration-200 ease-in-out'>Skills</a>
          </div>
        </div> */}
      {/* Navbar End */}
      {/* Hero Section Start */}
      <section className='py-10 px-5 font-poppins flex flex-wrap justify-between'>
        <div className='flex-none my-auto'>
          <h1 className='text-blue-700 font-bold text-lg md:text-xl'>Halo Semua 👋<span className='text-black'>, Saya</span></h1>
          <h2 className='text-black font-bold text-2xl md:text-3xl pt-2'>Muhammad Sulthonul Izza</h2>
          <p className='font-bold text-slate-600 text-sm md:text-md pt-1 mb-6'>Informatics Engineering Student <span className='font-medium'>& Front-End Developer</span></p>
          <a href="https://wa.me/+6289509558484" className='p-3 bg-green-600 rounded-full font-semibold text-white hover:bg-green-500 transition-all duration-200 ease-in-out'>Hubungi Saya</a>
        </div>
        <div className='w-72 mx-auto md:mx-0'>
          <img src="assets/foto_profil_br.png" alt="Profil Picture" className='my-10 md:my-auto w-full border-4 border-blue-600 rounded-full'/>
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Section Start */}
        <section id='about' className='max-w-screen-lg px-5 py-5 mx-auto'>
          <h1 className='text-center text-2xl font-bold pb-5'>About Me</h1>
          <p className=' text-md font-medium pt-2 text-justify'>
          I am a student at the Informatics Engineering Department of Universitas Negeri Semarang, where I am currently pursuing my undergraduate degree. My primary focus is on web development, an area that I am deeply passionate about. I am committed to honing my skills in designing and building innovative web applications that can make a meaningful impact in today's digital landscape.<br/><br/>
          In addition to web development, I am also interested in exploring the fields of machine learning and artificial intelligence. I believe that these technologies have the potential to revolutionize the way we live and work, and I am eager to learn more about them.<br/><br/>
          Recently, I had the opportunity to apply my web development skills in a real-world project. I was part of a team that developed a website for a campus organization, where I was responsible for designing and implementing the frontend for the projects page. This experience not only helped me to improve my coding skills but also taught me the importance of teamwork and collaboration in achieving a common goal.
          </p>
        </section>
      {/* About Section End */}
      {/* Portfolio Section Start */}
      <section id='portfolio' className='py-10 px-5'>
        <h1 className='text-center text-2xl font-bold pb-5'>My Portfolio</h1>
        <div className='grid gap-4 md:grid-cols-3'>
          {
            data.map((item) => (
              <PortfolioCard key={item.id} title={item.title} img={item.img} alt={item.alt} url={item.url} desc={item.desc}/>
            ))
          }
        </div>
      </section>
      {/* Portfolio Section End */}
      {/* Skills Section Start */}
      <section id='skills' className='py-10 px-5 mb-72'>
        <h1 className='text-center text-2xl font-bold pb-16'>My Skills</h1>
        <div className='grid gap-16 grid-cols-2 md:grid-cols-5 justify-center'>
          <img src="assets/html5.svg" alt="" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="assets/css3.svg" alt="" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="assets/javascript.svg" alt="" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="assets/python.svg" alt="" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="assets/C++.png" alt="" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="assets/react.svg" alt="" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
        </div>
      </section>
      {/* Skills Section End */}
    </div>
  )
}

export default App
