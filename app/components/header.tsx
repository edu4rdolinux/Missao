import Logo from "./logo"
import Navigation from "./navigation";
import Title from "./title"

const Header = () => {
    return (
        <div className="bg-pink-primary h-16 flex justify-between">
            <div className="flex items-center justify-start px-4">
                <Logo />
                <Title />
            </div>
                <Navigation/>
        </div>
    )
}

export default Header;
