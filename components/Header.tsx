import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-white">
          <span className="ml-3 text-xl">Eugene Goh</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center dark:text-white">
          <Link href="https://eugenegoh.hashnode.dev/">
            <a className="mr-5 hover:text-gray-900">Blog</a>
          </Link>

          <Link href="https://twitter.com/_eugenegoh">
            <a
              className="mr-5 hover:text-gray-900"
              target="_blank"
              rel="noopener"
            >
              Twitter
            </a>
          </Link>

          <Link href="https://github.com/EugeneGohh">
            <a
              className="mr-5 hover:text-gray-900"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </Link>
        </nav>

        <button
          className="inline-flex items-center bg-gray-100 border-3 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          type="button"
          aria-label="Toggle Dark Mode"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
