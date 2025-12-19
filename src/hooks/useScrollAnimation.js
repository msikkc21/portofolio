import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger animation when element enters/exits viewport
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Hide when scrolling out of view (repeatable animation)
                    setIsVisible(false);
                }
            },
            {
                threshold: options.threshold || 0.1, // Trigger when 10% of element is visible
                rootMargin: options.rootMargin || '0px',
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options.threshold, options.rootMargin, options.once]);

    return [elementRef, isVisible];
};
