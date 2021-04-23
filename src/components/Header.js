import * as React from "react";

export const Header = () => (
  <header className="pb-4 flex justify-between">
    <span id="body" className="uppercase  text-white font-semibold tracking-wider">Kishore Kumar</span>
    <div className="flex body">
      <p className="body text-gray-200 ">
        Home
      </p>
      <p className="pl-5 body text-gray-200">
        About
      </p>
    </div>
  </header>
);
