import React from "react";

import { Img, Text } from "components";

type Login1920InputsProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "emailtext"
> &
  Partial<{ emailtext: string }>;

const Login1920Inputs: React.FC<Login1920InputsProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-900 border border-solid border-teal-400 flex flex-row gap-2.5 h-10 md:h-auto items-center justify-between px-2.5 py-[11px] rounded w-[280px] md:w-full">
          <Text
            className="text-center text-gray-500 text-xs w-auto"
            size="txtMontserratRegular12Gray500"
          >
            {props?.emailtext}
          </Text>
          <Img
            className="h-[18px] w-[18px]"
            src="images/img_eye_white_a700.svg"
            alt="eye"
          />
        </div>
      </div>
    </>
  );
};

Login1920Inputs.defaultProps = { emailtext: "8" };

export default Login1920Inputs;
