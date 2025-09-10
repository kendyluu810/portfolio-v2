"use client";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typing";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [`Hi, I'm  ${pageInfo?.name}`, "Web Developer", "UI/UX Designer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-6 sm:space-y-8 items-center justify-center text-center overflow-hidden px-4">
      <BackgroundCircles />

      <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44">
        <Image
          className="rounded-full mx-auto object-cover"
          src={urlFor(pageInfo?.heroImage).url()}
          alt={pageInfo?.name || "Hero Image"}
          fill
          priority
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm sm:text-base md:text-lg uppercase text-gray-400 pb-2 tracking-[6px] md:tracking-[12px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold px-2 sm:px-10 leading-snug">
          <span>{text}</span>
          <Cursor cursorColor="#68B2A0" />
        </h1>

        <div className="pt-10 sm:pt-16 -mb-20 space-x-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>{" "}
          <br />
          <Link href="#contactme">
            <button className="heroButton mt-4">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
