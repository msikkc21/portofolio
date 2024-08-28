
const PortfolioCard = (props) => {
    return(
        <div className="relative border-4 border-blue-600 rounded-xl overflow-hidden group">
            <img src={props.img} alt={props.alt} className='img-fluids images w-full h-full group-hover:blur-sm transition-all duration-300 ease-in-out'/>
            <div className='absolute flex bottom-[-50px] z-20 group-hover:bottom-5 w-[90%] mx-5 bg-slate-600 rounded-lg transition-all duration-300'>
                <h2 className='text-white text-lg py-2 pl-2'>{props.title}</h2>
            
            </div>
        </div>
    )
};

export default PortfolioCard