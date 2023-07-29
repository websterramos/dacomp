"use client";

import React from "react";

export type Event = {
  image: string;
  name: string;
  text: string;
};

const Event: React.FC<{ event: Event }> = ({ event }) => {
  const { image, name, text } = event;

  return (
    <div className="mx-auto flex w-full flex-col items-center gap-2 rounded-lg bg-gray-800 p-4 text-white">
      <img className="max-w-32 h-32 overflow-auto" src={image} />
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-justify">{text}</p>
    </div>
  );
};

export default Event;
