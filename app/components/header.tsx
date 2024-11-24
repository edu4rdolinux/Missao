import Logo from "./logo"
import Title from "./title"

const Header = () => {
    return (
        <div className="bg-fuchsia-400 h-16 flex items-center justify-start px-4">
            <Logo />
            <Title />
        </div>
    )
}

export default Header;
