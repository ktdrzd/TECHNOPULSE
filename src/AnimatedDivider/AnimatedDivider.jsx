import React, { useRef, useEffect, useState } from 'react';
import css from './AnimatedDivider.module.css';

const AnimatedDivider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dividerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.05 }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
    };
  }, []); 

  return (
    <div className={css.dividerContainer}> 
        <div
            ref={dividerRef}
            className={`${css.divider} ${isVisible ? css.isVisible : ''}`}
        ></div>
    </div>
  );
};

export default AnimatedDivider;