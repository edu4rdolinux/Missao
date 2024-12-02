"use client"

interface Props {
  Text: string;
  scrollToPosition: number;
}

const NavigationPath = ({ Text, scrollToPosition }: Props) => {
  const handleClick = () => {
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  };

  return (
    <h1
      className="text-white relative group cursor-pointer"
      onClick={handleClick}
    >
      {Text}
      <span
        className="absolute left-0 bottom-0 w-full h-[4px] bg-white rounded-md transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
      />
    </h1>
  );
};

export default NavigationPath;
