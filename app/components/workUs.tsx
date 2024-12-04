import DirectContactButton from "./directContactButton"
import WorkUsText from "./workUsText"
import WorkUsTitle from "./workUsTitle"

const WorkUs = () => {
    return (
        <div style={{ marginTop: '2em' }} className="ml-16 mt-32">
            <WorkUsTitle/>
            <WorkUsText/>
            <DirectContactButton/>
        </div>
    )
}

export default WorkUs