interface Props {
    Title: String;
}

const ServiceTemplate = ({Title}: Props) => {
    return (
        <div style={{ backgroundColor: "#212223" }} className="w-96 h-96 bg-slate-100">
            <h1 className="text-center text-4xl">{Title}</h1>
        </div>
    )
}

export default ServiceTemplate