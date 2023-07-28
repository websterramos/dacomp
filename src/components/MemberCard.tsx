'use client'

import React from 'react';

export type Member = {
  course: string;
  role: string;
  phrase: string;
  link: string;
  photo: string;
  name: string;
};

const courseColors: { [key: string]: string} = {
  'CCO': 'border-blue-500',
  'ECO': 'border-purple-500',
  'SIN': 'border-red-500'
}

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  const {photo, name, course, role, link, phrase } = member;
  const borderColor = courseColors[course];

  return (
    <div className={`p-3 bg-white rounded-lg shadow-md border border-gray-300  max-h-[13rem] max-w-[10rem] hover:scale-105 hover:border-${borderColor}`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={photo}
          alt={name}
          className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
        />
        <h2 className="flex justify-center text-sm font-semibold">{name}</h2>
        <p className=" text-gray-500 text-sm mb-2">{course} | {role}</p>
        <p className="text-sm italic">"{phrase}"</p>
      </a>
    </div>
  );
}

export default MemberCard;
