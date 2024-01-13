import React from "react";

import { Img, Text } from "components";

type C1248SixCardpromotionProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "battleofthemagicianstext"
  | "pricetext"
  | "datetext"
  | "promotiontext"
  | "pricetext1"
> &
  Partial<{
    battleofthemagicianstext: string;
    pricetext: string;
    datetext: string;
    promotiontext: string;
    pricetext1: string;
  }>;

const C1248SixCardpromotion: React.FC<C1248SixCardpromotionProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[152px] relative w-full">
          <Img
            className="absolute h-[152px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_image96_152x304.png"
            alt="imageNinetySix"
          />
          <div className="absolute bottom-[0] flex flex-col gap-1.5 h-[66px] md:h-auto inset-x-[0] items-center justify-start mx-auto shadow-bs3 w-[304px] md:w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-white-A700 uppercase w-auto"
                size="txtMontserratBlack16"
              >
                {props?.battleofthemagicianstext}
              </Text>
              <Text
                className="text-sm text-white-A700 uppercase w-auto"
                size="txtMontserratBlack14"
              >
                {props?.pricetext}
              </Text>
            </div>
            <Text
              className="text-[8px] text-white-A700 uppercase w-auto"
              size="txtMontserratBlack8"
            >
              {props?.datetext}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="text-gray-500 text-sm"
              size="txtMontserratMedium14"
            >
              {props?.promotiontext}
            </Text>
          </div>
          <Text
            className="max-w-[304px] md:max-w-full text-sm text-white-A700"
            size="txtMontserratBold14"
          >
            {props?.pricetext1}
          </Text>
        </div>
      </div>
    </>
  );
};

C1248SixCardpromotion.defaultProps = {
  battleofthemagicianstext: "Battle of the magicians",
  pricetext: "€1000 Toutnament",
  datetext: "1-12 july 2022",
  promotiontext: "1-12. July 2022",
  pricetext1: "Battle of the Magicians - €1000 Tournament",
};

export default C1248SixCardpromotion;
