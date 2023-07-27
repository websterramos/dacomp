'use client'

import React from 'react';

export type Member = {
  id: number;
  photo: string;
  name: string;
  course: string;
  position: string;
  link: string;
  phrase: string;
};

const courseColors: { [key: string]: string} = {
  'CCO': 'border-blue-500',
  'ECO': 'border-purple-500',
  'SIN': 'border-red-500'
}

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  const { id, photo, name, course, position, link, phrase } = member;
  const borderColor = courseColors[course];

  return (
    <div className={` bg-white rounded-lg shadow-md ${borderColor} max-h-[13rem] max-w-[10rem] hover:scale-105`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={photo}
          alt={name}
          className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
        />
        <h2 className="flex justify-center text-sm font-semibold">{name}</h2>
        <p className=" text-gray-500 text-sm mb-2">{course} | {position}</p>
        <p className="text-sm italic">"{phrase}"</p>
      </a>
    </div>
  );
}

export default MemberCard;