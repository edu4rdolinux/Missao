import DirectContactButton from "./directContactButton"
import WorkUsText from "./workUsText"
import WorkUsTitle from "./workUsTitle"

const WorkUs = () => {
    return (
        <div style={{ marginTop: '40em' }} className="ml-32 mt-32">
            <WorkUsTitle/>
            <WorkUsText/>
            <DirectContactButton/>
        </div>
    )
}

export default WorkUs