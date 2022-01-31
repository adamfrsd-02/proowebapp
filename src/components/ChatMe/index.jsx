import React from "react";
import "./ChatMe.css";
import "../../utils/data";
import { data } from "../../utils/data";

function ChatMe() {
  var linkwa = "https://api.whatsapp.com/send?phone=" + data.no_wa;
  return (
    <div className="flex flex-row">
      <a
        href={linkwa}
        className="float md:px-10 px-4 flex flex-row space-x-2"
        target="_blank"
      >
        <i className="fab fa-whatsapp my-float my-auto wa-icon bounce-fx"></i>{" "}
        <p className="text-base my-auto font-bold hidden md:block">
          Contact Us !
        </p>
      </a>
    </div>
  );
}

export default ChatMe;
