"use client";

import clsx from "clsx";
import { useState } from "react";

const navItems = {
  "#home": {
    name: "home",
  },
  "#stats": {
    name: "stats",
  },
  "#blog": {
    name: "blog",
  },
  "#about": {
    name: "about",
  },
};

export function MorphicNavbar() {
  const [activePath, setActivePath] = useState("#home");

  const isActiveLink = (path: string) => {
    return activePath === path;
  };

  const handleClick = (path: string) => {
    setActivePath(path);
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="mx-auto max-w-4xl px-2 sm:px-4 py-2 w-full">
      <div className="flex items-center justify-center">
        <div className="glass flex flex-wrap items-center justify-center sm:justify-between gap-1 overflow-hidden rounded-xl">
          {Object.entries(navItems).map(([path, { name }], index, array) => {
            const isActive = isActiveLink(path);
            const isFirst = index === 0;
            const isLast = index === array.length - 1;
            const prevPath = index > 0 ? array[index - 1][0] : null;
            const nextPath =
              index < array.length - 1 ? array[index + 1][0] : null;

            return (
              <button
                className={clsx(
                  "flex items-center justify-center bg-black p-1.5 px-2 sm:px-4 text-sm sm:text-lg text-white transition-all duration-300 dark:bg-white dark:text-black",
                  isActive
                    ? "mx-1 sm:mx-2 rounded-xl font-semibold text-sm sm:text-lg"
                    : clsx(
                      (isActiveLink(prevPath || "") || isFirst) &&
                      "rounded-l-xl",
                      (isActiveLink(nextPath || "") || isLast) &&
                      "rounded-r-xl"
                    )
                )}
                key={path}
                onClick={() => handleClick(path)}
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default MorphicNavbar;
