const Footer = () => {
    return(
        <div className="bg-slate-900 text-white h-42 mx-2">
            <ul className="flex justify-center py-8 gap-16">
                <li className="nav-item font-medium text-lg my-auto hover:text-blue-500 transition-all duration-200 ease-in-out">
                    <a href="#home">Home</a>
                </li>
                <li className="nav-item font-medium text-lg my-auto hover:text-blue-500 transition-all duration-200 ease-in-out">
                    <a href="#about">About</a>
                </li>
                <li className="nav-item font-medium text-lg my-auto hover:text-blue-500 transition-all duration-200 ease-in-out">
                    <a href="#portfolio">Portofolio</a>
                </li>
                <li className="nav-item font-medium text-lg my-auto hover:text-blue-500 transition-all duration-200 ease-in-out">
                    <a href="#skills">Skills</a>
                </li>
            </ul>
            <p className="flex justify-center py-7 w-full border-t-2 border-white">© 2025 MSI. All rights reserved</p>
        </div>
    )
}

export default Footer;