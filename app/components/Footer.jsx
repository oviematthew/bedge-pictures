import React from "react";
import GetCurrentYear from "../utils/GetCurrentYear";

function Footer() {
  return (
    <>
      <div className="footer bg-white dark:bg-black pb-5 pt-5 mt-10 ">
        <div className="flex items-center justify-center">
          <svg
            width="1918"
            height="1"
            viewBox="0 0 1918 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4.37114e-08"
              y1="0.5"
              x2="1918"
              y2="0.500168"
              stroke="#3E0D62"
              stroke-opacity="0.2"
              stroke-dasharray="6 6"
            />
          </svg>
        </div>

        <p className="flex justify-center mt-10">
          Copyright © <GetCurrentYear /> Bedge Pictures.
        </p>
      </div>
    </>
  );
}

export default Footer;
