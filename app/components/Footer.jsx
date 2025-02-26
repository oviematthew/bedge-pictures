import React from "react";
import GetCurrentYear from "../utils/GetCurrentYear";

function Footer() {
  return (
    <>
      <div className="footer">
        <p>
          Copyright © <GetCurrentYear /> Bedge Pictures.
        </p>
      </div>
    </>
  );
}

export default Footer;
