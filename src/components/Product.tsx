"use client";
import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  imageURL: string;
  name: string;
}

const Product = ({ imageURL, name }: IProps) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="mx-auto flex w-full flex-col items-center gap-2 rounded-lg bg-gray-800 p-4 text-white"
      >
        <img className="max-w-32 md:max-h-48" src={imageURL} />
        <h3 className="text-lg font-medium">{name}</h3>
      </button>

      <Dialog
        className="relative z-10"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="rounded-2xl border-2 border-dark-gray bg-gray-800 p-4 text-white drop-shadow-lg">
            <div className="flex flex-col gap-8">
              <button
                onClick={() => setIsOpen(false)}
                className="flex justify-end"
              >
                <FontAwesomeIcon icon={faXmark} size="xl" />
              </button>
              <img className="max-w-sm" src={imageURL} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Product;
