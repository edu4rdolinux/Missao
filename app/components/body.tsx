import ContactUs from "./contactUs"
import EffectWord from "./effectText"
import OurServices from "./ourServices"
import OurStory from "./ourStory"
import WorkUs from "./workUs"
import WtButton from "./wtButton"

const Body = () => {
    return (
        <div>
            <EffectWord/>
            <WtButton/>
            <OurStory/>
            <OurServices/>
            <ContactUs/>
        </div>
    )
}

export default Body