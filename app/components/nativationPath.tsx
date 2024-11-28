interface Props {
    Text: string;
  }
  
  const NavigationPath = ({ Text }: Props) => {
    return <h1 className="text-white-primary">{Text}</h1>;
  };
  
  export default NavigationPath;
  