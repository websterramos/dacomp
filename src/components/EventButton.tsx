import React from "react";
import Event from "./Event";

interface IProps {
  event: string;
}

const EventButton = ({ event }: IProps) => {
  return (
    <div className="mx-auto flex max-w-full flex-col items-center justify-center gap-4 rounded-2xl bg-dark-gray p-2 drop-shadow-lg md:max-w-xl">
      <h3 className="gap-4 p-2 text-2xl font-semibold uppercase text-white drop-shadow-md">
        {event}
      </h3>
      <div className="mx-auto flex flex-col gap-4 px-2 pb-2 md:grid md:grid-cols-2">
        <Event
          imageURL="ramgover.jpg"
          name="RAMgover"
          text="A RAMgover é uma festa tradicional que ocorre no primeiro semestre do ano"
        />
        <Event
          imageURL="computaria.png"
          name="Computaria"
          text="A Computaria é uma festa tradicional que ocorre no segundo semestre do ano"
        />
      </div>
    </div>
  );
};

export default EventButton;
