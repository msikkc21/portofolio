import React from "react";

const PortfolioCard = (props) => {
  return (
    <div className="portfolio-card bg-white dark:bg-[#001E43] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] flex flex-col h-full min-h-[500px]">
      <div className="portfolio-image relative group overflow-hidden aspect-video w-full">
        <img 
          src={props.img} 
          alt={props.alt} 
          className="w-full h-full object-cover object-center transition-transform duration-1500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h3 className="text-white text-xl font-bold mb-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-[50ms] text-center px-4">{props.title}</h3>
            <a 
              href={props.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#007BFF] text-white text-sm font-medium rounded-md hover:bg-[#0062CC] transition-all duration-500 ease-out hover:shadow-lg transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 delay-[150ms] hover:scale-105 hover:shadow-blue-500/30 min-w-[140px]"
            >
              <span className="transform transition-transform duration-500 ease-in-out relative">View Project</span>
              <svg className="w-4 h-4 ml-1 transition-all duration-500 ease-in-out transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6 transform transition-all duration-300 group-hover:scale-[1.01] flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{props.title}</h3>
          <div className="text-sm text-gray-700 dark:text-gray-200 font-medium">{props.year}</div>
        </div>
        
        {props.role && (
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs bg-[#E6F3FF] dark:bg-[#003B80] text-[#007BFF] dark:text-white rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-500 ease-[cubic-bezier(0.34,0.7,0.34,1)] hover:translate-x-1 hover:bg-[#D9EDFF] dark:hover:bg-[#0052B3] transform origin-left">
              {props.role}
            </span>
          </div>
        )}
        
        <div className="description-container relative max-h-[150px] overflow-y-auto pr-1">
          <p className="text-gray-800 dark:text-gray-100 mb-4 text-sm font-medium">{props.desc}</p>
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white dark:from-[#001E43] to-transparent pointer-events-none opacity-70"></div>
        </div>
        
        <div className="mt-auto">
          {props.tech && (
            <div className="flex flex-wrap gap-2 mt-3">
              {props.tech.map((item, index) => (
                <span 
                  key={index}
                  className="tech-tag inline-block px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg font-medium transform transition-all duration-500 ease-[cubic-bezier(0.34,0.7,0.34,1)] hover:scale-105 hover:shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001A3A] flex justify-between items-center transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-[#00142E] mt-auto">
        <a 
          href={props.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#007BFF] dark:text-[#66B2FF] hover:text-[#0062CC] dark:hover:text-white text-sm font-medium transition-colors duration-300 flex items-center hover:scale-105"
          style={{transitionTimingFunction: 'cubic-bezier(0.34, 0.7, 0.34, 1)'}}
        >
          <svg className="w-4 h-4 mr-1 transition-transform duration-300 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
          <span>Demo</span>
        </a>
        <a 
          href={props.sourceCode || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-[#007BFF] dark:hover:text-white text-sm font-medium transition-colors duration-300 flex items-center hover:scale-105"
          style={{transitionTimingFunction: 'cubic-bezier(0.34, 0.7, 0.34, 1)'}}
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C20.565 21.795 24 17.295 24 12C24 5.37 18.63 0 12 0Z" />
          </svg>
          <span>Source</span>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;