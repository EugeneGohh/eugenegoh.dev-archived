import React from "react";
import Link from "next/link";
import Divider from "@mui/material/Divider";

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <Divider variant="middle" />

      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 dark:text-white">
          © 2021 Eugene Goh —
          <Link href="https://twitter.com/_eugenegoh">
            <a
              className="text-gray-600 ml-1 dark:text-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              @eugenegoh
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
