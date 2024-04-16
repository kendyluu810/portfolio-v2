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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <Image
        className="rounded-full mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
        width={150}
        height={150}
      />

      <div className="z-20">
        <h2 className="text-lg uppercase text-gray-400 pb-2 tracking-[10px] md:tracking-[15px] mx-2">
          {pageInfo?.role}
        </h2>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#68B2A0" />
        </h1>

        <div className="pt-24 -mb-20 space-x-2">
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
