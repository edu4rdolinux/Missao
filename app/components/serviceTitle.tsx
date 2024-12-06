interface TitleProps {
    title: string;
}

const ServiceTitle = ({ title }: TitleProps) => {
    return <h1 className="text-3xl text-white">{title}</h1>;
};

export default ServiceTitle;