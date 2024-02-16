import React from "react";
type Text = {
  text: string;
};
const PrimaryButton = ({ text }: Text) => {
  return (
    <button className="w-fit  bg-blue text-white rounded-3xl px-6 py-2 ">
      {text}
    </button>
  );
};

export default PrimaryButton;
