"use client"

import ContactUsText from "./contactUsText"
import ContactUsTitle from "./contactUsTitle"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

const ContactUs = () => {
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
            <ContactUsTitle/>
            <ContactUsText/>
        </div>
    )
}

export default ContactUs