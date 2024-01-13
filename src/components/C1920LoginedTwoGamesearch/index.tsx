import React from "react";

import { Img, Text } from "components";

type C1920LoginedTwoGamesearchProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "text1" | "text2" | "image1" | "shadow"
> &
  Partial<{ text1: string; text2: string; image1: string; shadow: string }>;

const C1920LoginedTwoGamesearch: React.FC<C1920LoginedTwoGamesearchProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bottom-[0] flex flex-col gap-[9px] items-start justify-start left-[17%] w-auto">
          <Text
            className="text-white-A700 text-xs w-auto"
            size="txtMontserratBlack12"
          >
            {props?.text1}
          </Text>
          <Text
            className="text-[9px] text-white-A700 w-auto"
            size="txtMontserratRegular9"
          >
            {props?.text2}
          </Text>
        </div>
        <Img
          className="absolute bottom-[0] h-[50px] left-[1%] object-cover rounded-md w-[14%]"
          alt="notombofakhenat"
          src={props?.image1}
        />
        {!!props?.shadow ? (
          <div className="absolute bg-gradient1  h-[57px] inset-[0] justify-center m-auto rounded-bl-md rounded-br-md w-full"></div>
        ) : null}
      </div>
    </>
  );
};

C1920LoginedTwoGamesearch.defaultProps = {
  text1: "Pirates 2 Mutiny",
  text2: "PUSH GAMING",
  image1: "images/img_notombofakhenaten_50x64.png",
};

export default C1920LoginedTwoGamesearch;
