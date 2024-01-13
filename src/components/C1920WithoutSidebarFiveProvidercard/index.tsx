import React from "react";

import { Img, Text } from "components";

type C1920WithoutSidebarFiveProvidercardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "dynamictext1" | "dynamictext2"
> &
  Partial<{ dynamictext1: string; dynamictext2: string }>;

const C1920WithoutSidebarFiveProvidercard: React.FC<
  C1920WithoutSidebarFiveProvidercardProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[46px] items-center justify-start mt-3.5 px-1.5 w-[46px]">
          <Img
            className="h-[46px] md:h-auto object-cover w-[98%]"
            src="images/img_pragmaticicon2.png"
            alt="pragmaticiconTwo"
          />
        </div>
        <Text
          className="mt-[25px] text-center text-white-A700 text-xs"
          size="txtMontserratBlack12"
        >
          {props?.dynamictext1}
        </Text>
        <Text
          className="mt-2 text-[9px] text-center text-white-A700"
          size="txtMontserratRegular9"
        >
          {props?.dynamictext2}
        </Text>
      </div>
    </>
  );
};

C1920WithoutSidebarFiveProvidercard.defaultProps = {
  dynamictext1: "Pragmatic Play",
  dynamictext2: "178 Games",
};

export default C1920WithoutSidebarFiveProvidercard;
