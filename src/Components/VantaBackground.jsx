import React, { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const VantaBackground = () => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(
        document.documentElement.classList.contains('dark')
    );

    useEffect(() => {
        // Destroy existing effect if any
        if (vantaEffect) {
            vantaEffect.destroy();
        }

        // Detect mobile screen
        const isMobile = window.innerWidth < 768;

        const effect = NET({
            el: vantaRef.current,
            THREE: THREE, // Required by Vanta
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: isDarkMode ? 0x1ff : 0x1ff, // Cyan for both modes
            backgroundColor: isDarkMode ? 0x001E43 : 0x007BFF, // Dark blue for dark, blue for light
            points: isMobile ? 4.00 : 8.00, // Fewer points on mobile
            maxDistance: isMobile ? 20.00 : 28.00, // Longer distance on mobile
            spacing: isMobile ? 30.00 : 25.00, // More spacing on mobile
        });

        setVantaEffect(effect);

        return () => {
            if (effect) effect.destroy();
        };
    }, [isDarkMode]);

    useEffect(() => {
        // Watch for dark mode changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const newIsDarkMode = document.documentElement.classList.contains('dark');
                    if (newIsDarkMode !== isDarkMode) {
                        setIsDarkMode(newIsDarkMode);
                    }
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, [isDarkMode]);

    return (
        <div
            ref={vantaRef}
            className="absolute inset-0 w-full h-full max-h-screen"
            style={{ zIndex: 0 }}
        />
    );
};

export default VantaBackground;
