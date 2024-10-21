import React from "react";

const titleStyle =
  "text-[2.5rem] md:text-[3rem] font-semibold text-center my-[1.5rem] mx-0  w-max mx-auto pb-[0.3rem]";

const Title = ({ children }) => {
  return (
    <div className="relative mx-auto w-max">
      <div className="absolute bottom-0 left-0 right-0 mx-auto mt-4 h-[3px] w-[85%] rounded-full bg-gradient-to-r from-primary/90 to-primary/20"></div>
      <h2 className={`${titleStyle}`}>{children}</h2>
    </div>
  );
};

export default Title;
