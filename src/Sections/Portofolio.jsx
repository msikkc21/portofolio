import React from "react";
import PortfolioCard from "../Components/PortfolioCard";

const Portfolio = () => {
  return (
    <section id="portfolio" className="pb-24 pt-12 px-5 container">
      <h1 className="text-center text-4xl font-bold text-white mb-10">My Portofolio</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {data.map((item) => (
          <PortfolioCard
            key={item.id}
            title={item.title}
            img={item.img}
            alt={item.alt}
            url={item.url}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

const data = [
  {
    id: 1,
    title: "I Secret Website",
    img: "assets/isecret.png",
    alt: "Website I Secret",
    url: "https://isecretilkom.org/projects",
    desc: "I contributed to this project by creating the frontend part of the projects page using ReactJs and TailwindCSS.",
  },
];
