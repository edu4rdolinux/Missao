import About from "./aboutPath"
import Contact from "./contactPath"
import Services from "./services"
import Work from "./workPath"

const Navigation = () => {
    return (
        <div className="flex m-5 gap-4 mr-8">
            <About/>
            <Services/>
            <Contact/>
            <Work/>
        </div>
    )
}

export default Navigation