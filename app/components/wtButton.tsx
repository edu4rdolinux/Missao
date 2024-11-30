"use client"

const OpenWt = () => {
    window.open("https://web.whatsapp.com/", "_blank");
}

const WtButton = () => {
    return (
      <div className="w-32 h-32 fixed bottom-2 right-2">
        <button 
          onClick={OpenWt} 
          className="w-full h-full bg-wt-image bg-no-repeat bg-center bg-cover rounded-full"
        ></button>
      </div>
    );
};

export default WtButton;
