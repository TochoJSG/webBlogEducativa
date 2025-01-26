import { useEffect } from "react";

const useScrollOpacity = (ref, factor = -333) => {
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const val = 1 + window.scrollY / factor;
        ref.current.style.opacity = Math.max(0, Math.min(1, val)); // Limita la opacidad entre 0 y 1
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, factor]);
};

export default useScrollOpacity;
