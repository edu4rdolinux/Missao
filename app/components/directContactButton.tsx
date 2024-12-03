"use client"

const OpenLink = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}

const DirectContactButton = () => {
  return (
    <button 
      onClick={OpenLink} 
      className="w-64 h-16 text-3xl rounded-2xl bg-pink-primary text-slate-100 hover:shadow-5xl transition-all duration-300 ease-in-out"
    >
        Direct Contact
    </button>
  );
};

export default DirectContactButton;