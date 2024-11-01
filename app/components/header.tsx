import HeaderOptions from "./headerOptions"
import Title from "./title"

const Header = () => {
    return (
        <div className="m-8 flex justify-center space-x-96">
            <Title/>
            <HeaderOptions/>
        </div>
    )
}

export default Header