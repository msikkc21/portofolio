import React from "react";

const Certificates = () => {
  return (
    <section id="certificates" className="px-5 py-16 container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificatesData.map((cert, index) => (
          <div 
            key={index}
            className="group bg-white dark:bg-[#001A3A] rounded-lg overflow-hidden shadow-lg transition-all duration-700 hover:translate-y-[-8px] hover:shadow-xl hover:shadow-blue-500/10 flex flex-col h-full"
            style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}
          >
            <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-all duration-700 group-hover:bg-gray-100 dark:group-hover:bg-gray-600" style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}>
              {cert.logo ? (
                <img 
                  src={cert.logo} 
                  alt={`${cert.issuer} Logo`} 
                  className="h-16 object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 animate-pulse-soft"
                  style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}
                />
              ) : (
                <div className="text-2xl font-bold text-gray-400 transition-all duration-700 group-hover:text-blue-500 dark:group-hover:text-blue-300" style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}>{cert.issuer}</div>
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div>
                <h3 className="text-lg font-semibold mb-2 transition-all duration-500 group-hover:text-blue-600 dark:group-hover:text-blue-400" style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}>{cert.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{cert.issuer} • {cert.year}</p>
                <p className="text-sm mb-4">{cert.description}</p>
              </div>
              <div className="mt-auto pt-4 w-full">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-700 hover:shadow-lg transform hover:scale-105 hover:translate-y-[-2px] relative overflow-hidden font-medium"
                  style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}
                >
                  <span className="relative z-10">View Certificate</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0 transform translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Data sertifikat (contoh - ganti dengan data aktual)
const certificatesData = [
  {
    title: "Web Development with React",
    issuer: "Dicoding",
    year: "2023",
    description: "Comprehensive training on web development using React framework and modern JavaScript.",
    link: "#",
    logo: "assets/dicoding-logo.png" // Tambahkan logo jika ada
  },
  {
    title: "JavaScript Fundamentals",
    issuer: "Dicoding",
    year: "2023",
    description: "In-depth study of JavaScript fundamentals including ES6+ features and asynchronous programming.",
    link: "#",
    logo: "assets/dicoding-logo.png" // Tambahkan logo jika ada
  },
  {
    title: "UI/UX Design Principles",
    issuer: "Coursera",
    year: "2022",
    description: "Course covering modern UI/UX design principles and best practices for web applications.",
    link: "#",
    logo: "" // Tambahkan logo jika ada
  }
];

export default Certificates;
