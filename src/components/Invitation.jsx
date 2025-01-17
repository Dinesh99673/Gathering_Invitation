import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import Gallery from "./Gallery";

function Invitation(props) {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    if (!props.particle) {
      navigate("/");
    }
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3 min-h-[90vh] w-[90%] border-cyan-800 border-x-4 border-y-4 mx-auto bg-gradient-to-b from-blue-400 to-gray-300 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="col-span-full flex justify-center items-center flex-col mb-5">
        <p className="text-center text-[#800000] font-extrabold text-lg sm:text-xl">
          MODERN COLLEGE OF ARTS, SCIENCE AND COMMERCE
        </p>
        <p className="text-cyan-700 text-sm font-medium">
          SHIVAJINAGAR, PUNE-05
        </p>
      </div>

      {/* Invitation Content Section */}
      <div className="col-span-full flex flex-col items-center text-center text-gray-800 font-medium px-4">
        <p className="text-lg sm:text-xl font-semibold">
          We, the students of <span className="font-bold">TYBSc CS (Division B)</span>,
          cordially invite you to our Class-Wise Variety Program.
        </p>
        <div className="mt-4 text-md sm:text-lg space-y-2">
          <p>📅 <strong>Date:</strong> 22nd January 2025</p>
          <p>🕒 <strong>Time:</strong> 2pm</p>
          <p>📍 <strong>Venue:</strong> Hall no.: 305</p>
        </div>
        <p className="mt-6 text-gray-700">
          Your presence will make the occasion even more special. <br />
          We look forward to celebrating with you!
        </p>
        <p className="mt-8 text-cyan-800 font-bold">
          Warm regards, <br /> TYBSc CS Division B
        </p>
      </div>

      {/* Confetti Effect */}
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={2000}
        gravity={0.07}
      />
      <Gallery/>
    </div>
  );
}

export default Invitation;
