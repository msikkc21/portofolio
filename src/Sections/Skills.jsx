const Skills = () => {
    return (
        <section id='skills' className='px-5 mb-72 container'>
        <h1 className='text-center text-4xl font-bold pt-10 pb-24'>My Skills</h1>
        <div className='grid gap-16 grid-cols-2 md:grid-cols-5 justify-center'>
          <img src="assets/html5.svg" alt="HTML" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="assets/css3.svg" alt="CSS" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="assets/javascript.svg" alt="JavaScript" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="assets/python.svg" alt="Python" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="assets/C++.png" alt="C++" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
          <img src="assets/react.svg" alt="ReactJS" className='w-24 mx-auto hover:scale-125 transition-all duration-200 ease-in-out'/>
        </div>
      </section>
    )
}

export default Skills