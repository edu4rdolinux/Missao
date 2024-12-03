import WorkPath from "./workPath";

const Footer = () => {
    return (
        <footer className="bg-pink-primary h-16 flex items-center justify-between px-5 mt-32">
            <p className="font-secondary text-white">Powered by Next.js</p>
            <WorkPath />
        </footer>
    );
};

export default Footer;
