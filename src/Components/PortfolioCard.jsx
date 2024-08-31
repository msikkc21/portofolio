import { Children } from "react";

const PortfolioCard = (props) => {
    return(
        <div className=" bg-slate-300 py-3 px-3 rounded-xl group">
            <div className="relative border-4 border-slate-500 rounded-xl overflow-hidden">
                <img src={props.img} alt={props.alt} className='img-fluids images w-full h-full group-hover:blur-sm transition-all duration-300 ease-in-out'/>
                <div className='absolute flex bottom-[-50px] z-10 group-hover:bottom-5 w-[90%] left-[5%] bg-slate-600 rounded-lg transition-all duration-300 justify-between'>
                    <h2 className='text-white text-lg py-2 pl-2'>{props.title}</h2>
                    <a href={props.url} className="text-white my-auto pr-2 text-xs hover:text-blue-500">Go to project..</a>
                </div>
            </div>
            <h3 className="py-3 text-lg font-semibold">{props.title}</h3>
            <p className="text-justify font-base">{props.desc}</p>
        </div>
    )
};

export default PortfolioCard