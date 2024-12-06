import ServiceTitle from './serviceTitle';
import ServiceDescription from './serviceDescription';

interface Props {
    Title: string;
    Description: string;
}

const ServiceTemplate = ({ Title, Description }: Props) => {
    return (
        <div>
            <ServiceTitle title={Title} />
            <ServiceDescription description={Description} />
        </div>
    );
}

export default ServiceTemplate;
