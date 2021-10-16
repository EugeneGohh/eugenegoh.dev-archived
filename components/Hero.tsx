import React from "react";
import Image from "next/image";
import profilePic from "../public/profile-pic.png";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-20 py-20 md:flex-row flex-col items-center">
        <div className="w-64 h-64 relative mb-4">
          <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
            <span className="hidden group-hover:table-cell text-white font-bold align-middle">
              KR
            </span>
            <Image
              src={profilePic}
              alt="Picture of the author"
              width={500}
              height={500}
              className="object-cover object-center w-full h-full visible group-hover:hidden"
            />
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center dark:text-white">
          <h1 className="title-font sm:text-4xl text-3xl mb-5 font-medium text-gray-900 dark:text-white">
            Hi there,
            <RoughNotation type="underline" show={true}>
              I'm Eugene
            </RoughNotation>
            .
          </h1>
          <p className="mb-8 leading-relaxed">
            I love writing{" "}
            <RoughNotation type="highlight" show={true} color="#a9d6e5">
              TypeScript/JavaScript, Next.js, Redux, GraphQL, Node.js, MongoDB,
              and PostgreSQL.
            </RoughNotation>
            <br className="hidden lg:inline-block" />I enjoy giving back to
            society by contributing to{" "}
            <RoughNotationGroup show={true}>
              <RoughNotation
                type="highlight"
                color="#a9d6e5"
                animationDuration={1500}
              >
                open source repositories on GitHub, writing blogs &
              </RoughNotation>
              <RoughNotation
                type="highlight"
                color="#a9d6e5"
                animationDuration={1500}
              >
                organizing events on Codecademy Community{" "}
              </RoughNotation>
            </RoughNotationGroup>
            sharing what I have learned. I'm also one of the early contributors
            behind Codecademy Docs.
          </p>

          <p>Let's chat on Twitter!</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
