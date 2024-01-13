import React from "react";

import { Img, Text } from "components";

type C1248SixCardpromotion1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "pushittothelimione"
  | "price"
  | "p1325august2022"
  | "p112july2022"
  | "priceOne"
> &
  Partial<{
    pushittothelimione: string;
    price: string;
    p1325august2022: string;
    p112july2022: string;
    priceOne: string;
  }>;

const C1248SixCardpromotion1: React.FC<C1248SixCardpromotion1Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[152px] relative w-full">
          <Img
            className="absolute h-[152px] inset-[0] justify-center m-auto object-cover rounded-sm w-full"
            src="images/img_image96_2.png"
            alt="imageNinetySix"
          />
          <div className="absolute bottom-[0] flex flex-col gap-1.5 h-[66px] md:h-auto inset-x-[0] items-center justify-start mx-auto shadow-bs3 w-[304px] md:w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-base text-white-A700 uppercase w-auto"
                size="txtMontserratBlack16"
              >
                {props?.pushittothelimione}
              </Text>
              <Text
                className="text-sm text-white-A700 uppercase w-auto"
                size="txtMontserratBlack14"
              >
                {props?.price}
              </Text>
            </div>
            <Text
              className="text-[8px] text-white-A700 uppercase w-auto"
              size="txtMontserratBlack8"
            >
              {props?.p1325august2022}
            </Text>
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
            {props?.priceOne}
          </Text>
        </div>
      </div>
    </>
  );
};

C1248SixCardpromotion1.defaultProps = {
  pushittothelimione: "push it to the limit",
  price: "€5000 push gaming tournament",
  p1325august2022: "13-25 august 2022",
  p112july2022: "13-25. August 2022",
  priceOne: "€5000 Push Gaming Tournament",
};

export default C1248SixCardpromotion1;
