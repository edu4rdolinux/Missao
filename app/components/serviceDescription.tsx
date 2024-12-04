interface DescriptionProps {
    description: string;
}

const ServiceDescription = ({ description }: DescriptionProps) => {
    return <p className="text-white text-center">{description}</p>;
};

export default ServiceDescription;