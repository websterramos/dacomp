"use client";
import React from "react";

interface IProps {
  name: string;
  email: string;
}

const Email = ({ name, email }: IProps) => {
  return (
    <div className="w-full rounded-lg bg-gray-800 p-2">
      <div className="flex flex-col items-center justify-center hover:text-blue-600 focus:text-blue-600">
        <span className="font-medium">{name}</span>
        <a href={"mailto:" + email}>{email}</a>
      </div>
    </div>
  );
};

export default Email;
