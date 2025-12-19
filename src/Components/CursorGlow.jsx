import { useEffect, useState } from 'react';

const CursorGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            {/* Main glow effect */}
            <div
                className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
                style={{
                    opacity: isVisible ? 1 : 0,
                }}
            >
                <div
                    className="absolute w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        background: 'radial-gradient(circle, rgba(0, 123, 255, 0.15) 0%, rgba(0, 123, 255, 0.08) 25%, transparent 70%)',
                        filter: 'blur(20px)',
                        transition: 'left 0.1s ease-out, top 0.1s ease-out',
                    }}
                />

                {/* Inner bright core */}
                <div
                    className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 123, 255, 0.15) 40%, transparent 70%)',
                        filter: 'blur(50px)',
                        transition: 'left 0.05s ease-out, top 0.05s ease-out',
                    }}
                />

                {/* Outer subtle glow */}
                <div
                    className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        background: 'radial-gradient(circle, rgba(0, 123, 255, 0.05) 0%, transparent 60%)',
                        filter: 'blur(70px)',
                        transition: 'left 0.15s ease-out, top 0.15s ease-out',
                    }}
                />
            </div>
        </>
    );
};

export default CursorGlow;
