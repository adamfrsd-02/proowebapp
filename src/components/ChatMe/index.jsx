import React from "react";
import "./ChatMe.css";

function ChatMe() {
  return (
    <div className="flex flex-row">
      <a
        href="https://api.whatsapp.com/send?phone=xxx"
        class="float md:px-10 px-4 flex flex-row space-x-2"
        target="_blank"
      >
        <i class="fab fa-whatsapp my-float my-auto"></i>{" "}
        <p className="text-base my-auto font-bold hidden md:block">
          Contact Us !
        </p>
      </a>
    </div>
  );
}

export default ChatMe;
