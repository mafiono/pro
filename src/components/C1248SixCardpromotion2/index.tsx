import React from "react";

import { Img, Text } from "components";

type C1248SixCardpromotion2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "thewinningclub" | "thecrowniswaiting" | "p112july2022" | "battleofthemagi"
> &
  Partial<{
    thewinningclub: string;
    thecrowniswaiting: string;
    p112july2022: string;
    battleofthemagi: string;
  }>;

const C1248SixCardpromotion2: React.FC<C1248SixCardpromotion2Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[152px] relative w-full">
          <Img
            className="absolute h-[152px] inset-[0] justify-center m-auto object-cover rounded-sm w-full"
            src="images/img_image96_1.png"
            alt="imageNinetySix"
          />
          <div className="absolute bottom-[0] flex flex-col h-[66px] md:h-auto inset-x-[0] items-center justify-start mx-auto shadow-bs3 w-[304px] md:w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-white-A700 uppercase w-auto"
                size="txtMontserratBlack16"
              >
                {props?.thewinningclub}
              </Text>
              <Text
                className="text-sm text-white-A700 uppercase w-auto"
                size="txtMontserratBlack14"
              >
                {props?.thecrowniswaiting}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="text-gray-500 text-sm"
              size="txtMontserratMedium14"
            >
              {props?.p112july2022}
            </Text>
          </div>
          <Text
            className="text-sm text-white-A700 w-auto"
            size="txtMontserratBold14"
          >
            {props?.battleofthemagi}
          </Text>
        </div>
      </div>
    </>
  );
};

C1248SixCardpromotion2.defaultProps = {
  thewinningclub: "The winning club",
  thecrowniswaiting: "the crown is waiting for you",
  p112july2022: "No expiry date",
  battleofthemagi: "Join the Winning Club",
};

export default C1248SixCardpromotion2;
