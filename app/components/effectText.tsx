"use client"

import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const EffectWord = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-out',
    });

    sr.reveal('.reveal', {
      origin: 'bottom',
      interval: 100,
    });
  }, []);

  return (
    <h1 className="m-32 text-6xl font-bold reveal">
      <span className="text-pink-primary">Transform</span> those small sparks<br/>
      of possibility into the<br/> flames of a concrete <br/><span className="text-pink-primary reveal">achievement.</span>
    </h1>
  );
};

export default EffectWord;
