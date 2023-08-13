import { useEffect, useRef, useState } from "react";

export const useElementOnScreen = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    const callbackFunction = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };
  
    useEffect(() => {
      let containerRefCurrent = containerRef.current;
  
      const observer = new IntersectionObserver(callbackFunction, options);
      if (containerRefCurrent) observer.observe(containerRefCurrent);
  
      // Désactiver l'observateur lors du démontage du composant
      return () => {
        if (containerRefCurrent) observer.unobserve(containerRefCurrent);
      };
    }, [containerRef, options]);
  
    useEffect(() => {
      // Empêcher l'élément de disparaître lorsque le scroll se termine
      if (isVisible) {
        const handleScroll = () => setIsVisible(true);
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
    }, [isVisible]);
  
    return [containerRef, isVisible];
  };