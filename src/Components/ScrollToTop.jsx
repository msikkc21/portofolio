import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    // Add scroll to top button functionality
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Create button element
    const button = document.createElement('button');
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    `;
    button.className = 'fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg opacity-0 transition-opacity duration-200 hover:bg-blue-700 focus:outline-none z-50';
    button.setAttribute('aria-label', 'Scroll to top');
    button.setAttribute('title', 'Scroll to top');
    button.style.opacity = '0';
    button.style.display = 'none';
    
    button.addEventListener('click', scrollToTop);
    document.body.appendChild(button);

    // Show/hide button based on scroll position
    const toggleScrollButton = () => {
      if (window.pageYOffset > 500) {
        button.style.display = 'block';
        setTimeout(() => {
          button.style.opacity = '1';
        }, 50);
      } else {
        button.style.opacity = '0';
        setTimeout(() => {
          button.style.display = 'none';
        }, 300);
      }
    };

    window.addEventListener('scroll', toggleScrollButton);

    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', toggleScrollButton);
      if (button && button.parentNode) {
        button.parentNode.removeChild(button);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
