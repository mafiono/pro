import React from "react";

import { Img, Text } from "components";

type C1920ButtonOpenArchiveCardpromotion2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "thewinningclubtext" | "thecrowntext" | "noexpirydatetext" | "jointheclubtext"
> &
  Partial<{
    thewinningclubtext: string;
    thecrowntext: string;
    noexpirydatetext: string;
    jointheclubtext: string;
  }>;

const C1920ButtonOpenArchiveCardpromotion2: React.FC<
  C1920ButtonOpenArchiveCardpromotion2Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-48 relative w-full">
          <Img
            className="absolute h-48 inset-[0] justify-center m-auto object-cover rounded-sm w-full"
            src="images/img_image96_1.png"
            alt="imageNinetySix"
          />
          <div className="absolute bottom-[0] flex flex-col h-[67px] md:h-auto inset-x-[0] items-center justify-start mx-auto shadow-bs3 w-96 md:w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-white-A700 uppercase w-auto"
                size="txtMontserratBlack16"
              >
                {props?.thewinningclubtext}
              </Text>
              <Text
                className="text-sm text-white-A700 uppercase w-auto"
                size="txtMontserratBlack14"
              >
                {props?.thecrowntext}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="text-gray-500 text-sm"
              size="txtMontserratMedium14"
            >
              {props?.noexpirydatetext}
            </Text>
          </div>
          <Text
            className="text-sm text-white-A700 w-auto"
            size="txtMontserratBold14"
          >
            {props?.jointheclubtext}
          </Text>
        </div>
      </div>
    </>
  );
};

C1920ButtonOpenArchiveCardpromotion2.defaultProps = {
  thewinningclubtext: "The winning club",
  thecrowntext: "the crown is waiting for you",
  noexpirydatetext: "No expiry date",
  jointheclubtext: "Join the Winning Club",
};

export default C1920ButtonOpenArchiveCardpromotion2;
