
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-white py-0">
      <div className="section-container">
        <p className="text-center text-gray-600 text-sm">
          This awesome website is made by{" "}
          <a href="https://x.com/zxtni" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
            Rahul
          </a>{" "}
         and you can support me on github at{" "}
          <a href="https://github.com/zxtni" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
            @Zxtni
          </a>
        </p>
      </div>
    </footer>;
};
export default Footer;
