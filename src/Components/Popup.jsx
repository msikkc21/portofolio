import React from "react";

export default function Popup(props) {
    return(props.trigger) ? (
        <div className="flex justify-center items-center fixed w-[100%] h-32 bg-slate-500 z-20">
            <div className="relative p-8 w-full max-w-[640px] bg-white ">
                <button className="absolute top-4 right-4">Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}
