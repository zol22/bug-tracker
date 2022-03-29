import React from "react";
import SvgComponent from "../components/SvgComponent";

function NotFound() {
  return (
    <div>
      <div className="grid place-items-center h-screen">
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold text-center mb-8">
            Uggh, Page not found !{" "}
          </h1>
          <SvgComponent />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
