"use client";
import React, { useState } from "react";
import Menu from "@/components/Menu";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  let [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-dark-gray items-center justify-center px-4 font-semibold text-white shadow-lg lg:flex">
      <div className="flex h-20 w-full max-w-7xl items-center justify-between px-4">
        <picture>
          <a href="#hero">
            <img
              className="w-40"
              src="dacomp-full.png"
              alt="Logo do DACOMP UNIFEI"
            />
          </a>
        </picture>

        <div className="hidden lg:flex">
          <Menu />
        </div>

        <button
          className="lg:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>
      </div>
      <div className="lg:hidden">{showMobileMenu && <Menu />}</div>
    </header>
  );
};

export default Header;
