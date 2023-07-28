"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  question: string;
  response: string;
}

const QuestionReponse = ({ question, response }: IProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between gap-4 p-2 px-4 py-2 font-semibold text-black">
            <span className={`${open ? "text-blue-600" : ""} `}>
              {question}
            </span>
            <FontAwesomeIcon
              className={`${open ? "hidden" : ""} `}
              icon={faPlus}
            />
            <FontAwesomeIcon
              className={`${open ? "text-blue-600" : "hidden"} `}
              icon={faMinus}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="flex w-full items-center justify-center px-4 py-2 text-black">
            <p className="text-justify">{response}</p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default QuestionReponse;
