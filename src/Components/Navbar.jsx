import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="font-poppins w-full p-4 container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light flex justify-between">
        <img
          src="../../public/assets/LogoMSI.png"
          alt="Logo"
          className="w-14"
        />
        <div className="hidden lg:flex justify-between w-2/3">
          <ul className="flex justify-center gap-16 w-1/3">
            <li className="nav-item font-bold text-lg my-auto">
              <a href="#">About</a>
            </li>
            <li className="nav-item font-bold text-lg my-auto">
              <a href="#">Portofolio</a>
            </li>
            <li className="nav-item font-bold text-lg my-auto">
              <a href="#">Skills</a>
            </li>
          </ul>
          <a
            href="#"
            className="my-auto font-bold text-md text-white bg-green-600 hover:bg-green-500 transition-all duration-200 ease-in-out rounded-full py-2 px-5"
          >
            Contact Me
          </a>
        </div>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          type="button"
          className={`lg:hidden my-auto transform transition-transform ${isOpen ? "-rotate-180" : "rotate-0"}`}
          style={{ transition: "transform 0.5s ease, rotate 0.5s ease" }}
        >
          {isOpen ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6743 15L5.89871 7.22624C5.81155 7.13908 5.74241 7.0356 5.69523 6.92171C5.64806 6.80783 5.62378 6.68576 5.62378 6.56249C5.62378 6.43922 5.64806 6.31716 5.69523 6.20328C5.74241 6.08939 5.81155 5.98591 5.89871 5.89874C5.98588 5.81158 6.08936 5.74244 6.20324 5.69526C6.31713 5.64809 6.43919 5.62381 6.56246 5.62381C6.68573 5.62381 6.8078 5.64809 6.92168 5.69526C7.03557 5.74244 7.13905 5.81158 7.22621 5.89874L15 13.6744L22.7737 5.89874C22.9498 5.72271 23.1885 5.62381 23.4375 5.62381C23.6864 5.62381 23.9252 5.72271 24.1012 5.89874C24.2773 6.07478 24.3761 6.31354 24.3761 6.56249C24.3761 6.81145 24.2773 7.05021 24.1012 7.22624L16.3256 15L24.1012 22.7737C24.2773 22.9498 24.3761 23.1885 24.3761 23.4375C24.3761 23.6864 24.2773 23.9252 24.1012 24.1012C23.9252 24.2773 23.6864 24.3762 23.4375 24.3762C23.1885 24.3762 22.9498 24.2773 22.7737 24.1012L15 16.3256L7.22621 24.1012C7.05018 24.2773 6.81142 24.3762 6.56246 24.3762C6.31351 24.3762 6.07475 24.2773 5.89871 24.1012C5.72268 23.9252 5.62378 23.6864 5.62378 23.4375C5.62378 23.1885 5.72268 22.9498 5.89871 22.7737L13.6743 15Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 12H10M20 5H4M20 19H4"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`absolute py-2 left-0 bg-white w-full lg:hidden transform transition-transform ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.6s ease" }}
      >
        <ul className="py-4">
          <li className="nav-item font-bold text-lg py-2 px-4 rounded-lg hover:bg-slate-400 transition-all duration-200 ease-in-out">
            <a href="#">About</a>
          </li>
          <li className="nav-item font-bold text-lg py-2 px-4 rounded-lg hover:bg-slate-400 transition-all duration-200 ease-in-out">
            <a href="#">Portofolio</a>
          </li>
          <li className="nav-item font-bold text-lg py-2 px-4 rounded-lg hover:bg-slate-400 transition-all duration-200 ease-in-out">
            <a href="#">Skills</a>
          </li>
        </ul>
        <button
          href="#"
          className="my-auto font-bold text-md text-white bg-green-600 hover:bg-green-500 transition-all duration-200 ease-in-out rounded-full py-2 w-[95%] flex justify-center mx-auto"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
