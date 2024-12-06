"use client"

import OurServicesTitle from "./ourServicesTitle"
import TheServices from "./theServices"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

const OurServices = () => {

    useEffect(() => {
        const sr = ScrollReveal({
          distance: '50px',
          duration: 1000,
          delay: 200,
          easing: 'ease-out',
        })
    
        sr.reveal('.reveal', {
          origin: 'bottom',
          interval: 100,
        })
      }, [])

    return (
        <div style={{ marginTop: '40em' }} className="ml-32 mt-32 reveal">
            <OurServicesTitle/>
            <TheServices/>
        </div>
    )
}

export default OurServices