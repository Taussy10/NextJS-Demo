'use client'
import React from "react";
import { useSearchParams } from "next/navigation";

const About = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  return (
    <div>
      <h1>{name}</h1>
      About
    </div>
  );
};

export default About;
