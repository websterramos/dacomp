import React from "react";
import Writer from "./Writer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize } from "@fortawesome/free-regular-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-regular-svg-icons";

const Window = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg drop-shadow-md ">
      <div
        id="window-bar"
        className="flex w-full items-center justify-end gap-2 rounded-t-lg border-2 border-b-0 border-dark-gray bg-[#222222] p-2 text-white drop-shadow-md "
      >
        <div className="h-6 justify-center rounded-full bg-[#373737] px-1.5">
          <FontAwesomeIcon icon={faWindowMinimize} size="xs" />
        </div>
        <div className="h-6 justify-center rounded-full bg-[#373737] px-1">
          <FontAwesomeIcon icon={faWindowMaximize} />
        </div>
        <div className="h-6 justify-center rounded-full bg-[#373737] px-1">
          <FontAwesomeIcon icon={faRectangleXmark} />
        </div>
      </div>

      <div
        id="window"
        className="flex flex-col items-center justify-center rounded-b-lg border-2 border-t-0 border-dark-gray bg-[#300A24] p-4"
      >
        <h1 className="text-center text-4xl font-bold text-light-blue drop-shadow-lg">
          Bem-vind@ ao
          <span className="text-white drop-shadow-lg"> DACOMP</span>
        </h1>
        <Writer />
      </div>
    </div>
  );
};

export default Window;
