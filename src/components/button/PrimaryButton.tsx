import React from "react";
type Text = {
  text: string;
};
const PrimaryButton = ({ text }: Text) => {
  return (
    <button className="w-fit  bg-blue text-white rounded-3xl 2xs:px-2 sm:px-2 md:px-2 py-1 lg:px-6 lg:py-2 2xs:text-sm ">
      {text}
    </button>
  );
};

export default PrimaryButton;
