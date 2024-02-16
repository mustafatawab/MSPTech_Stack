import React from "react";
type Text = {
  text: string;
};
const SecondaryButton = ({ text }: Text) => {
  return (
    <button className="w-fit bg-transparent text-white border rounded-3xl px-4 py-2 ">
      {text}
    </button>
  );
};

export default SecondaryButton;
