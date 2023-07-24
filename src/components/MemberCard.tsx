'use client'

import React from 'react';

export type Member = {
  id: number;
  photo: string;
  name: string;
  course: string;
  link: string;
  phrase: string;
};

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  const { id, photo, name, course, link, phrase } = member;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={photo}
          alt={name}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        />
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-500 mb-2">{course}</p>
        <p>{phrase}</p>
      </a>
    </div>
  );
}

export default MemberCard;
