import React, { useEffect } from "react";

export default function Popup({ trigger, onClose, children }) {
    useEffect(() => {
        // Prevent scrolling when popup is open
        if (trigger) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        // Cleanup function
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [trigger]);

    // Close on ESC key press
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape' && trigger) {
                onClose();
            }
        };
        
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [trigger, onClose]);

    // Close when clicking outside of popup content
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('popup-overlay')) {
            onClose();
        }
    };

    return trigger ? (
        <div 
            className="popup-overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 backdrop-blur-sm transition-all duration-200"
            onClick={handleOutsideClick}
        >
            <div className="relative p-6 md:p-8 w-full max-w-[700px] bg-white dark:bg-[#051630] rounded-lg shadow-2xl transform transition-all duration-200 ease-in-out animate-fadeIn">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                    aria-label="Close popup"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className="mt-2">
                    {children}
                </div>
            </div>
        </div>
    ) : null;
}
