"use client"

const OpenWt = () => {
    window.open("https://web.whatsapp.com/", "_blank");
}

const WtButton = () => {
  return (
    <button 
      onClick={OpenWt} 
      className="w-32 h-32 fixed bottom-2 right-2 bg-wt-image bg-no-repeat bg-center bg-cover rounded-full hover:shadow-lg transition-all duration-300 ease-in-out"
    ></button>
  );
};

export default WtButton;