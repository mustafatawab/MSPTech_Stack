import React from "react";
type Text = {
  text: string;
};
const PrimaryButton = ({ text }: Text) => {
  return (
    <button className="hover:text-black hover:bg-transparent hover:outline 2xs:mx-auto sm:mx-auto md:mx-0 w-fit bg-blue text-white  rounded-3xl 2xs:px-2 sm:px-2 md:px-4 lg:px-4 2xs:py-1 sm:py-1 md:py-2 lg:py-2 xs:text-sm  md:text-lg">
      {text}
    </button>
  );
};

export default PrimaryButton;
