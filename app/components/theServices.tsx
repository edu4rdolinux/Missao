import ServiceTemplate from "./serviceTemplate";
import services from "../servicesData.json";

const TheServices = () => {
  return (
    <div className="flex gap-8 justify-center flex-wrap">
      {services.map((service, index) => (
        <ServiceTemplate
          key={index}
          Title={service.title}
          Description={service.description}
        />
      ))}
    </div>
  );
}

export default TheServices;
