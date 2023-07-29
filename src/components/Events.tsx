"use client";
import React from "react";
import { useState } from "react";

const Events = () => {
  return (
    <div className="flex flex-col gap-16 md:flex-row">
      <EventsChild />
    </div>
  );
};

const EventsChild = () => {
  let [dacomp] = [
    {
      id: 0,
      image: "dacomp-logo.png",
      name: "SEPROG",
      text: "Semana da Programação",
    },

    {
      id: 1,
      image: "dacomp-logo.png",
      name: "SpACE",
      text: "Semana para Automação, Computação e Eletrônica",
    },
  ];

  let [partyEvent] = [
    {
      id: 0,
      image: "computaria.png",
      name: "Computaria",
      text: "Festa do segundo semestre",
    },

    {
      id: 1,
      image: "computaria.png",
      name: "Computaria",
      text: "Festa do segundo semestre",
    },
  ];

  return (
    <div className="max-w-md px-2 py-16 sm:px-0">
      <div className="mx-auto flex max-w-full flex-col items-center justify-center gap-4 rounded-2xl bg-dark-gray p-2 drop-shadow-lg md:max-w-xl">
        <h3 className="gap-4 p-2 text-2xl font-semibold uppercase text-white drop-shadow-md">
          Acadêmicos
        </h3>
        {Object.keys(dacomp).map((topic, id) => (
          <div key={id}>
            {Array.isArray(topic) ? (
              <div className="mx-auto flex flex-col gap-4 px-2 pb-2 md:grid md:grid-cols-2">
                {topic.map((event) => (
                  <Event key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
