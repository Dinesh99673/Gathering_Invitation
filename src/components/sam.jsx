import React from "react";


function PhotoCard({ imageUrl, message, ind ,val}) {
  AOS.init();
  return (
    <div className="relative w-68 h-[500px] overflow-hidden rounded-lg shadow-lg group" data-aos={val} key={ind}>
      <img
        src={imageUrl}
        alt="Card"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className=" absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-cyan-400 w-[80%] text-xl font-semibold absolute text-center">{message}</p>
      </div>
    </div>
  );
}

export default PhotoCard;
