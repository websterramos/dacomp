"use client";
import React from "react";

interface IProps {
  imageURL: string;
  name: string;
  text: string;
}

const Event = ({ imageURL, name, text }: IProps) => {
  return (
    <div className="mx-auto flex w-full flex-col items-center gap-2 rounded-lg bg-gray-800 p-4 text-white">
      <img className="max-w-32 h-32 overflow-auto" src={imageURL} alt="" />
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-justify">{text}</p>
    </div>
  );
};

export default Event;
