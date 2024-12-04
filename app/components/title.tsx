"use client"

import { useRouter } from "next/navigation";

const Title = () => {
    const router = useRouter()

    const handleRedirect = () => {
      router.push('/'); 
    };

    return <h1 onClick={handleRedirect} className="text-white-primary font-sans m-4 text-2xl">OurServices</h1>
}

export default Title