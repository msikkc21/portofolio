const Hero = () => {
  return (
    <section className="py-10 px-5 font-poppins h-[75vh] flex flex-wrap justify-between container">
      <div className="flex-none my-auto">
        <h1 className="text-[#002D5E] dark:text-[#57A8FF] font-bold text-lg md:text-xl">
          Hello.. 👋
          <span className="text-black dark:text-white">, My Name</span>
        </h1>
        <h2 className="text-black dark:text-white font-bold text-2xl md:text-3xl pt-2">
          Muhammad Sulthonul Izza
        </h2>
        <p className="font-bold text-slate-700 dark:text-slate-300 text-sm md:text-md pt-1 mb-6">
          Informatics Engineering Student{" "}
          <span className="font-medium">& Front-End Developer</span>
        </p>
        <a
          href="https://wa.me/+6289509558484"
          className="py-3 px-5 bg-green-600 rounded-full font-semibold text-white hover:bg-green-500 transition-all duration-200 ease-in-out"
        >
          Contact Me
        </a>
      </div>
      <div className="lg:w-96 md:w-52 md:block hidden mx-auto md:mx-0 my-auto">
        <img
          src="assets/foto_profil_br.png"
          alt="Profil Picture"
          className="my-10 md:my-auto w-full border-4 border-blue-600 rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
