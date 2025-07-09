import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full py-16">
        <div className="space-y-6 max-w-xl">
          <div className="inline-block px-3 py-1 rounded-full bg-white dark:bg-blue-900/30 text-[#007BFF] dark:text-white text-sm font-medium shadow-sm transition-all duration-500 hover:shadow-md hover:transform hover:scale-105">
            Web Developer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white leading-tight">
            I Am <span className="text-white dark:text-[#66B2FF]">Muhammad Sulthonul Izza</span>
          </h1>
          <p className="text-lg text-white dark:text-gray-200">
            <span className="font-semibold">Informatics Engineering Student</span> passionate about creating beautiful and functional web experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="hero-contact-btn px-6 py-3 bg-white hover:bg-gray-50 text-[#007BFF] font-medium rounded-lg shadow-lg flex items-center group relative overflow-hidden transition-all duration-700 hover:shadow-blue-500/30 transform hover:scale-105 hover:-translate-y-1"
              style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}
            >
              <span className="relative z-10">Contact Me</span>
              <svg className="arrow-icon w-5 h-5 ml-2 relative z-10 transition-all duration-700 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></span>
            </a>
            <a
              href="#portfolio"
              className="hero-portfolio-btn px-6 py-3 bg-transparent text-white dark:text-white font-medium rounded-lg border border-white dark:border-white transition-all duration-700 hover:bg-white/10 transform hover:scale-105 hover:-translate-y-1"
              style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}
            >
              View Portfolio
            </a>
          </div>
          
          <div className="flex gap-6 pt-6">
            <a 
              href="https://www.linkedin.com/in/m-s-izza" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white dark:text-white hover:text-gray-100 dark:hover:text-gray-200 transition-all duration-500 transform hover:scale-125 hover:-translate-y-1"
              style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
            </a>
            <a 
              href="https://github.com/msikkc21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white dark:text-white hover:text-gray-100 dark:hover:text-gray-200 transition-all duration-500 transform hover:scale-125 hover:-translate-y-1"
              style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/m.s.ikkc21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white dark:text-white hover:text-gray-100 dark:hover:text-gray-200 transition-all duration-500 transform hover:scale-125 hover:-translate-y-1"
              style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-white/30 to-white/10 dark:from-[#66B2FF]/30 dark:to-[#003166]/20 rounded-2xl opacity-60 animate-pulse"></div>
          <img
            src="assets/izza.png"
            alt="Muhammad Sulthonul Izza"
            className="relative z-10 rounded-2xl shadow-xl max-w-md mx-auto object-cover transition-all duration-700 hover:shadow-2xl hover:scale-105"
            style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}
          />
          <div className="absolute -top-4 -right-4 bg-white dark:bg-white text-[#007BFF] dark:text-[#007BFF] rounded-lg shadow-lg p-3 z-20 transition-all duration-500 hover:scale-110 hover:shadow-blue-500/30 animate-rock">
            <svg className="w-6 h-6 animate-bounce-rotate" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
