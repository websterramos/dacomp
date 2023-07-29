"use client";

import React from "react";

export type Member = {
  course: string;
  role: string;
  phrase: string;
  link: string;
  photo: string;
  name: string;
};

const courseColors: { [key: string]: string } = {
  CCO: "border-blue-600",
  ECO: "border-orange-600",
  SIN: "border-red-600",
};

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  const { photo, name, course, role, link, phrase } = member;
  const borderColor = courseColors[course];

  return (
    <div
      className={`max-h-[13rem] max-w-[10rem] rounded-lg bg-gray-800 p-3 shadow-md transition-all duration-500 hover:scale-105 hover:border-${borderColor} scroll-ml-6 snap-start`}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={photo}
          alt={name}
          className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
        />
        <h2 className="flex justify-center text-sm font-semibold">{name}</h2>
        <p className=" mb-2 text-sm text-gray-500">
          {course} | {role}
        </p>
        <p className="text-sm italic">"{phrase}"</p>
      </a>
    </div>
  );
};

export default MemberCard;
