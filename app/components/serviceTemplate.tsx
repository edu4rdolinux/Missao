import ServiceTitle from './serviceTitle';
import ServiceDescription from './serviceDescription';

interface Props {
    Title: string;
    Description: string;
}

const ServiceTemplate = ({ Title, Description }: Props) => {
    return (
        <div className="w-96 h-96 bg-slate-100 flex flex-col justify-around" style={{ backgroundColor: "#212223" }}>
            <ServiceTitle title={Title} />
            <ServiceDescription description={Description} />
        </div>
    );
}

export default ServiceTemplate;