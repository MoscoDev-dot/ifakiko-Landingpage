"use client";
import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
];

const NavLang = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="py-3 px-10 rounded-lg border-2 font-semibold text-[#74B117] flex items-center gap-2"
        onClick={() => setOpen(!open)}
      >
        <LanguageIcon />
        {selected.label}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="absolute left-0 mt-2 w-full border-1 border-[#74B117] rounded-lg shadow z-10">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`px-4 py-2 cursor-pointer hover:bg-[#74B117]  `}
              onClick={() => handleSelect(lang)}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavLang;
