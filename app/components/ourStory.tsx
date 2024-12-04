"use client"

import { useEffect } from "react";
import OurStoryTitle from "./ourStoryTitle"
import Story from "./story"
import ScrollReveal from 'scrollreveal';

const OurStory = () => {

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
        <div style={{ marginTop: '40em' }} className="ml-32 mt-32 reveal">
            <OurStoryTitle/>
            <Story/>
        </div>
    )
}

export default OurStory