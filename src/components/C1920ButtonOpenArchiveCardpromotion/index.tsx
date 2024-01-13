import React from "react";

import { Img, Text } from "components";

type C1920ButtonOpenArchiveCardpromotionProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "battletitle"
  | "tournamentprice"
  | "eventdate"
  | "promotiondate"
  | "promotiontext"
> &
  Partial<{
    battletitle: string;
    tournamentprice: string;
    eventdate: string;
    promotiondate: string;
    promotiontext: string;
  }>;

const C1920ButtonOpenArchiveCardpromotion: React.FC<
  C1920ButtonOpenArchiveCardpromotionProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-48 relative w-full">
          <Img
            className="absolute h-48 inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_image96.png"
            alt="imageNinetySix"
          />
          <div className="absolute bottom-[0] flex flex-col gap-1.5 h-[67px] md:h-auto inset-x-[0] items-center justify-start mx-auto shadow-bs3 w-96 md:w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-white-A700 uppercase w-auto"
                size="txtMontserratBlack16"
              >
                {props?.battletitle}
              </Text>
              <Text
                className="text-sm text-white-A700 uppercase w-auto"
                size="txtMontserratBlack14"
              >
                {props?.tournamentprice}
              </Text>
            </div>
            <Text
              className="text-[8px] text-white-A700 uppercase w-auto"
              size="txtMontserratBlack8"
            >
              {props?.eventdate}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start justify-start w-96 md:w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="text-gray-500 text-sm"
              size="txtMontserratMedium14"
            >
              {props?.promotiondate}
            </Text>
          </div>
          <Text
            className="text-sm text-white-A700 w-auto"
            size="txtMontserratBold14"
          >
            {props?.promotiontext}
          </Text>
        </div>
      </div>
    </>
  );
};

C1920ButtonOpenArchiveCardpromotion.defaultProps = {
  battletitle: "Battle of the magicians",
  tournamentprice: "€1000 Toutnament",
  eventdate: "1-12 july 2022",
  promotiondate: "1-12. July 2022",
  promotiontext: "Battle of the Magicians - €1000 Tournament",
};

export default C1920ButtonOpenArchiveCardpromotion;
