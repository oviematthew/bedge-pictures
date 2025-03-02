import React from "react";
import GetCurrentYear from "../utils/GetCurrentYear";

function Footer() {
  return (
    <>
      <div className="footer  pb-5 pt-5 flex items-center justify-center z-100">
        <p className="flex justify-center">
          Copyright © <GetCurrentYear /> Bedge Pictures.
        </p>
      </div>
    </>
  );
}

export default Footer;
