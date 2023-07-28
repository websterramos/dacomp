"use client";

import React from "react";

export type Member = {
  id: number;
  photo: string;
  name: string;
  course: string;
  position: string;
  link: string;
  phrase: string;
};

const courseColors: { [key: string]: string } = {
  CCO: "border-blue-500",
  ECO: "border-purple-500",
  SIN: "border-red-500",
};

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  const { id, photo, name, course, position, link, phrase } = member;
  const borderColor = courseColors[course];

  return (
    <div
      className={`max-h-[13rem] max-w-[10rem] rounded-lg border border-2 border-gray-300 bg-white p-3 shadow-md hover:scale-105 hover:border-${borderColor}`}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={photo}
          alt={name}
          className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
        />
        <h2 className="flex justify-center text-sm font-semibold">{name}</h2>
        <p className=" mb-2 text-sm text-gray-500">
          {course} | {position}
        </p>
        <p className="text-sm italic">"{phrase}"</p>
      </a>
    </div>
  );
};

export default MemberCard;
