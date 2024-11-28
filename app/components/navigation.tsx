import About from "./about"
import Contact from "./contact"
import Work from "./work"

const Navigation = () => {
    return (
        <div className="flex m-5 gap-4 mr-8">
            <About/>
            <Contact/>
            <Work/>
        </div>
    )
}

export default Navigation