import React from "react";
import PortfolioCard from "../Components/PortfolioCard";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 bg-white/90 dark:bg-[#001E43]/80 py-8 px-4 rounded-xl shadow-lg transform transition-all duration-700 hover:shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white drop-shadow-sm">My Projects</h2>
          <div className="w-24 h-1 bg-[#007BFF] mx-auto mt-4 shadow-sm transition-all duration-500 ease-in-out hover:w-32"></div>
          <p className="mt-6 text-gray-800 dark:text-white max-w-3xl mx-auto font-medium">
            A collection of my projects that demonstrate my skills in creating responsive, 
            user-friendly web applications with clean code and attention to detail.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {portfolioData.map((item, index) => (
            <div 
              key={item.id} 
              className="transform transition-all duration-700 ease-in-out h-full" 
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both',
                animation: 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              <PortfolioCard
                title={item.title}
                img={item.img}
                alt={item.alt}
                url={item.url}
                sourceCode={item.sourceCode}
                desc={item.desc}
                tech={item.tech}
                year={item.year}
                role={item.role}
                isOnline={item.url !== "#"}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://github.com/msikkc21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-3 bg-[#007BFF] hover:bg-[#0062CC] text-white font-bold rounded-lg transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-lg hover:shadow-blue-500/30 border-2 border-[#007BFF] transform hover:scale-105 hover:-translate-y-1 overflow-hidden relative"
          >
            <span className="relative z-10">More Projects on GitHub</span>
            <svg className="w-5 h-5 ml-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform group-hover:rotate-12 relative z-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C20.565 21.795 24 17.295 24 12C24 5.37 18.63 0 12 0Z" />
            </svg>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

const portfolioData = [
  {
    id: 1,
    title: "MahaBisa | Student Freelance Platform",
    img: "assets/portfolio/mahabisa.png",
    alt: "MahaBisa Platform",
    url: "#",
    sourceCode: "https://github.com/msikkc21/mahabisa",
    desc: "Developed frontend interfaces using React and Tailwind CSS from UI/UX designs. Built dynamic pages including landing page, dashboard, and interactive forms. Collaborated with Laravel backend team for API integration, data management and authentication.",
    tech: ["React", "TailwindCSS", "Laravel"],
    year: "2025",
    role: "Frontend Developer"
  },
  {
    id: 2,
    title: "Furniture Template | E-commerce Platform",
    img: "assets/portfolio/template-furniture.png",
    alt: "Furniture E-commerce Template",
    url: "#",
    sourceCode: "https://github.com/msikkc21/template-furniture",
    desc: "Built e-commerce interface framework using Next.js and Tailwind CSS with responsive product catalog and navigation. Implemented API integration and server-side rendering optimizations for better performance.",
    tech: ["Next.js", "TailwindCSS"],
    year: "2025",
    role: "Frontend Developer"
  },
  {
    id: 3,
    title: "InSoft Website",
    img: "assets/portfolio/insoft.png",
    alt: "InSoft Website",
    url: "https://ezwithus.vercel.app",
    sourceCode: "https://github.com/msikkc21/insoft",
    desc: "Developed modern company profile website for INSOFT using Next.js and Tailwind CSS. Designed and implemented page structures, content, and responsive user interfaces. Focused on optimal user experience with smooth animations and fast loading times.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2024",
    role: "Frontend Developer"
  },
  {
    id: 4,
    title: "Personal Portfolio",
    img: "assets/portfolio/portfolio.png",
    alt: "Personal Portfolio",
    url: "https://sulthonulizza.vercel.app",
    sourceCode: "https://github.com/msikkc21/portofolio",
    desc: "Built a static website with React and TailwindCSS to showcase personal information, skills, and project listings with responsive design and modern UI components.",
    tech: ["React", "TailwindCSS"],
    year: "2024",
    role: "Frontend Developer"
  },
  {
    id: 5,
    title: "SeconDrive | Used Car Marketplace",
    img: "assets/portfolio/secondrive.png",
    alt: "SeconDrive",
    url: "#",
    sourceCode: "https://github.com/msikkc21/secondrive",
    desc: "Developed full-stack used car marketplace using PHP and MySQL with user authentication, vehicle listing uploads, advanced search and filtering features, and relational database management.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    year: "2024",
    role: "FullStack Developer"
  },
  {
    id: 6,
    title: "AutoPredict | Car Purchase Prediction",
    img: "assets/portfolio/autopredict.png",
    alt: "AutoPredict",
    url: "#",
    sourceCode: "https://github.com/msikkc21/car-purchase-decision",
    desc: "Built car purchase prediction application with Python Flask and Bootstrap. Created HTML input forms for sending data to machine learning model (Random Forest) and managed complete flow from interface to prediction output.",
    tech: ["Python", "Flask", "Bootstrap", "Random Forest"],
    year: "2024", 
    role: "FullStack Developer"
  }
  // {
  //   id: 7,
  //   title: "Panti Asuhan Profile Website",
  //   img: "assets/logo_light.svg",
  //   alt: "Panti Asuhan Profile Website",
  //   url: "#",
  //   sourceCode: "https://github.com/msikkc21/orphanage-profile",
  //   desc: "Created responsive and intuitive website for orphanage profile using Tailwind CSS and Laravel. Developed content management system with efficient database structure for easy information updates and gallery management.",
  //   tech: ["Tailwind CSS", "Laravel", "MySQL"],
  //   year: "2025",
  //   role: "FullStack Developer"
  // }
];
