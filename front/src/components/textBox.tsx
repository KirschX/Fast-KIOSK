import React from "react";

type TextBoxProps = {
  value: string | number | null;
  placeHolder?: string;
};

const TextBox: React.FC<TextBoxProps> = ({ value, placeHolder }) => {
  return (
    <div
      className={
        value
          ? `bg-[#FFF8E8] rounded-lg py-4 px-2 text-[#FEBB15]`
          : `bg-[#FFF8E8] rounded-lg py-4 px-2 text-gray-Light`
      }
    >
      {` ${value || placeHolder}`}
    </div>
  );
};

export default TextBox;
