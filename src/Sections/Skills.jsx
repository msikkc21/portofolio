import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: "assets/html5.svg", level: 90 },
        { name: "CSS", icon: "assets/css3.svg", level: 85 },
        { name: "JavaScript", icon: "assets/javascript.svg", level: 80 },
        { name: "React", icon: "assets/react.svg", level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "assets/python.svg", level: 70 },
        { name: "C++", icon: "assets/C++.png", level: 65 },
        { name: "JavaScript", icon: "assets/javascript.svg", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 75 },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 85 },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 70 }
      ]
    }
  ];

  // Technologies for the grid display
  const technologies = [
    { name: "HTML5", icon: "assets/html5.svg" },
    { name: "CSS3", icon: "assets/css3.svg" },
    { name: "JavaScript", icon: "assets/javascript.svg" },
    { name: "React", icon: "assets/react.svg" },
    { name: "Python", icon: "assets/python.svg" },
    { name: "C++", icon: "assets/C++.png" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
  ];

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with to build modern, responsive, 
            and user-friendly web applications.
          </p>
        </div>

        {/* Primary Skills with Progress Bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-[#001A3A] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-700 transform hover:-translate-y-1 hover:scale-[1.01]" style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-900 p-5">
                <h3 className="text-xl font-bold text-white text-center">{category.title}</h3>
              </div>
              
              <div className="p-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="mb-6 last:mb-0 group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-6 h-6 mr-3 object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                          style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}
                        />
                        <h4 className="font-medium text-gray-800 dark:text-gray-200 transition-all duration-700 group-hover:text-blue-600 dark:group-hover:text-blue-400" style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}>{skill.name}</h4>
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-700 group-hover:text-blue-600 dark:group-hover:text-blue-400" style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-all duration-700 group-hover:shadow-inner" style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}>
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-500 h-2 rounded-full transition-all duration-1500 group-hover:shadow-md group-hover:from-blue-600 group-hover:to-blue-500"
                        style={{ width: `${skill.level}%`, transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.2)' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Technology Grid */}
        <div className="bg-white dark:bg-[#001A3A] rounded-xl shadow-lg p-8 mb-8 transition-all duration-700 hover:shadow-xl" style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}>
          <h3 className="text-2xl font-bold mb-10 text-center">Technologies I Work With</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-700 transform group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20" style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}>
                  <img src={tech.icon} alt={tech.name} className="w-9 h-9 object-contain transition-all duration-700 group-hover:scale-110 group-hover:animate-float" style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}/>
                </div>
                <span className="mt-3 text-sm font-medium text-center transition-all duration-700 group-hover:text-blue-600 dark:group-hover:text-blue-400" style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.4)'}}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;