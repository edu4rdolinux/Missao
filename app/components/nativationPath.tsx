interface Props {
  Text: string;
}

const NavigationPath = ({ Text }: Props) => {
  return (
    <h1 className="text-white relative group">
      {Text}
      <span
        className="absolute left-0 bottom-0 w-full h-[4px] bg-white rounded-md transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
      />
    </h1>
  );
};

export default NavigationPath;
