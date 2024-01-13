import React from "react";

import { Img, Text } from "components";

type PWAOneGamecardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userimage"
  | "isnewgroup"
  | "iconcyrrentybtc"
  | "priceOne"
  | "iscustomgroup"
  | "iscustomgroup1"
> &
  Partial<{
    userimage: string;
    isnewgroup: string;
    iconcyrrentybtc: string;
    priceOne: string;
    iscustomgroup: string;
    iscustomgroup1: string;
  }>;

const PWAOneGamecard: React.FC<PWAOneGamecardProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-36 inset-x-[0] mx-auto object-cover rounded-md top-[0] w-36"
          alt="notombofakhenat_One"
          src={props?.userimage}
        />
        <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-center justify-center m-auto p-1 rounded-md w-full">
          <div className="flex flex-col md:gap-10 gap-[90px] items-center justify-start mb-1 w-[98%] md:w-full">
            <div className="flex flex-row gap-[39px] items-start justify-between w-full">
              <div className="flex flex-row gap-1.5 items-start justify-start mt-1 w-auto">
                <Text
                  className="bg-teal-400 justify-center p-1 rounded text-center text-white-A700 text-xs w-auto"
                  size="txtMontserratExtraBold12"
                >
                  {props?.isnewgroup}
                </Text>
                <div className="bg-yellow-900 flex flex-col items-center justify-center rounded w-[23px]">
                  {!!props?.iconcyrrentybtc ? (
                    <Img
                      className="h-[21px] w-[21px]"
                      alt="iconcyrrentybtc"
                      src={props?.iconcyrrentybtc}
                    />
                  ) : null}
                </div>
              </div>
              <Img
                className="h-6 mb-[3px] w-6"
                src="images/img_icongamecardhearton.svg"
                alt="icongamecardhea_One"
              />
            </div>
            <div className="flex flex-col items-center justify-start">
              {!!props?.priceOne ? (
                <Text
                  className="bg-indigo-500 justify-center p-1 rounded text-center text-white-A700 text-xs uppercase w-auto"
                  size="txtMontserratExtraBold12"
                >
                  {props?.priceOne}
                </Text>
              ) : null}
              <Text
                className="mt-[13px] text-center text-white-A700 text-xs"
                size="txtMontserratBlack12"
              >
                {props?.iscustomgroup}
              </Text>
              <Text
                className="mt-[9px] text-[9px] text-center text-white-A700"
                size="txtMontserratRegular9"
              >
                {props?.iscustomgroup1}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PWAOneGamecard.defaultProps = {
  userimage: "images/img_notombofakhenaten_2.png",
  isnewgroup: "NEW",
  iscustomgroup: "Pirates 2 Mutiny",
  iscustomgroup1: "PUSH GAMING",
};

export default PWAOneGamecard;
