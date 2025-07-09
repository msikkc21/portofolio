import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
        </div>
        
        <div className="bg-white dark:bg-[#001A3A] rounded-2xl shadow-lg p-8 mb-12 transition-all duration-700 hover:shadow-xl" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
          <div className="grid md:grid-cols-[1fr,2fr] gap-10">
            <div className="flex flex-col items-center">
              <div className="relative w-52 h-52 mb-6 transition-all duration-700 transform hover:scale-105 hover:shadow-xl" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-800 rounded-2xl opacity-20 transform translate-x-2 translate-y-2 transition-all duration-700 hover:translate-x-3 hover:translate-y-3 hover:opacity-30" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}></div>
                <img 
                  src="assets/izza.png" 
                  alt="Muhammad Sulthonul Izza" 
                  className="relative z-10 w-full h-full object-cover rounded-2xl shadow-md transition-all duration-700 hover:shadow-lg" 
                  style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}
                />
              </div>
              
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold transition-all duration-700 hover:text-blue-600 dark:hover:text-blue-400" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>Muhammad Sulthonul Izza</h3>
                <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-full inline-block transition-all duration-700 hover:bg-blue-200 dark:hover:bg-blue-800/40 hover:shadow-md transform hover:scale-105" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
                  Front-End Developer
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a student at the Informatics Engineering Department of Universitas Negeri Semarang, where I am currently pursuing my undergraduate degree. My primary focus is on web development, an area that I am deeply passionate about.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I am committed to honing my skills in designing and building innovative web applications that can make a meaningful impact in today's digital landscape. In addition to web development, I am also interested in exploring the fields of machine learning and artificial intelligence.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Recently, I had the opportunity to apply my web development skills in a real-world project. I was part of a team that developed a website for a campus organization, where I was responsible for designing and implementing the frontend for the projects page.
              </p>
              
              <div className="pt-6 flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-all duration-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-300 transform hover:scale-105 hover:-translate-y-1" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>ReactJS</span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-all duration-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-300 transform hover:scale-105 hover:-translate-y-1" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>JavaScript</span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-all duration-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-300 transform hover:scale-105 hover:-translate-y-1" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>TailwindCSS</span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-all duration-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-300 transform hover:scale-105 hover:-translate-y-1" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>HTML/CSS</span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-all duration-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-300 transform hover:scale-105 hover:-translate-y-1" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>Next.js</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-[#001A3A] rounded-xl shadow-md p-8 text-center transition-all duration-700 hover:shadow-xl transform hover:-translate-y-3 hover:scale-105 group" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-700 group-hover:scale-110 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
              <svg className="w-7 h-7 text-blue-600 dark:text-blue-400 transition-all duration-700 group-hover:text-blue-500 group-hover:rotate-12" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 transition-all duration-700 group-hover:text-blue-600 dark:group-hover:text-blue-400" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>Creative Problem Solver</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-all duration-700" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>I enjoy tackling complex problems and finding elegant solutions through code.</p>
          </div>
          
          <div className="bg-white dark:bg-[#001A3A] rounded-xl shadow-md p-8 text-center transition-all duration-700 hover:shadow-xl transform hover:-translate-y-3 hover:scale-105 group" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-700 group-hover:scale-110 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
              <svg className="w-7 h-7 text-blue-600 dark:text-blue-400 transition-all duration-700 group-hover:text-blue-500 group-hover:rotate-12" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 transition-all duration-700 group-hover:text-blue-600 dark:group-hover:text-blue-400" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>Detail Oriented</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-all duration-700" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>I pay close attention to details and strive for pixel-perfect implementations.</p>
          </div>
          
          <div className="bg-white dark:bg-[#001A3A] rounded-xl shadow-md p-8 text-center transition-all duration-700 hover:shadow-xl transform hover:-translate-y-3 hover:scale-105 group" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-700 group-hover:scale-110 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
              <svg className="w-7 h-7 text-blue-600 dark:text-blue-400 transition-all duration-700 group-hover:text-blue-500 group-hover:rotate-12" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 transition-all duration-700 group-hover:text-blue-600 dark:group-hover:text-blue-400" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>Team Player</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-all duration-700" style={{transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'}}>I thrive in collaborative environments and enjoy working with diverse teams.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;