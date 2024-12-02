interface DescriptionProps {
    description: string;
}

const ServiceDescription = ({ description }: DescriptionProps) => {
    return <p className="text-white">{description}</p>;
};

export default ServiceDescription;