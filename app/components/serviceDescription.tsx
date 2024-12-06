interface DescriptionProps {
    description: string;
}

const ServiceDescription = ({ description }: DescriptionProps) => {
    return <p className="text-white flex flex-wrap max-w-lg">{description}</p>;
};

export default ServiceDescription;