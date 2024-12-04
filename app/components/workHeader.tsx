import Logo from "./logo"
import Title from "./title"

const WorkHeader = () => {
    return (
        <div className="bg-pink-primary h-16 flex justify-between">
            <div className="flex items-center justify-start px-4">
                <Logo />
                <Title />
            </div>
        </div>
    )
}

export default WorkHeader;
