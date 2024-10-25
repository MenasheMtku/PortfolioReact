import React from "react";

const sectionClass =
  "h-screen container p-6 mx-auto flex flex-col bg-red-400 items-center justify-center";

const Section = ({ children }) => {
  return <section className={`${sectionClass}`}>{children}</section>;
};

export default Section;
