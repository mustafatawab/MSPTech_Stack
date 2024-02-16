import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="sm:mx-4 md:mx-16 lg:mx-16 px-5 md:mt-52 lg:mt-40  ">{children}</div>;
};

export default Wrapper;
