import React from "react";

import { Img, Text } from "components";

type C1920TenAboutcardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "customercaretext" | "descriptiontext" | "supporticon"
> &
  Partial<{
    customercaretext: string;
    descriptiontext: JSX.Element | string;
    supporticon: string;
  }>;

const C1920TenAboutcard: React.FC<C1920TenAboutcardProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bottom-[15%] flex flex-col gap-2.5 inset-x-[0] items-center justify-start mx-auto w-auto">
          <Text
            className="text-lg text-white-A700 w-auto"
            size="txtMontserratBold18"
          >
            {props?.customercaretext}
          </Text>
          <Text
            className="max-w-[259px] md:max-w-full text-white-A700 text-xs"
            size="txtMontserratExtraLight12"
          >
            {props?.descriptiontext}
          </Text>
        </div>
        <Img
          className="absolute h-[34px] left-[15%] top-[15%] w-[34px]"
          alt="iconaboutsuppor"
          src={props?.supporticon}
        />
        <div className="absolute backdrop-opacity-[0.5] bg-green-A400_75 blur-[150.00px] h-[88px] right-[0] rounded-[46px] top-[0] w-[31%]"></div>
      </div>
    </>
  );
};

C1920TenAboutcard.defaultProps = {
  customercaretext: "Customer care and support",
  descriptiontext: (
    <>
      Our customer support team is always on <br />
      hand to answer any of your questions, 24/7
    </>
  ),
  supporticon: "images/img_iconsupportchat.svg",
};

export default C1920TenAboutcard;
