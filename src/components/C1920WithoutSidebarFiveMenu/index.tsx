import React from "react";

import { Button, Img, Text } from "components";

type C1920WithoutSidebarFiveMenuProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "lobby"
  | "iteminline"
  | "iteminlineOne"
  | "iteminlineTwo"
  | "iteminlineThree"
  | "iteminlineFour"
  | "iteminlineFive"
  | "iteminlineSix"
  | "iteminlineSeven"
  | "iteminlineEight"
  | "providersbutton"
> &
  Partial<{
    lobby: string;
    iteminline: string;
    iteminlineOne: string;
    iteminlineTwo: string;
    iteminlineThree: string;
    iteminlineFour: string;
    iteminlineFive: string;
    iteminlineSix: string;
    iteminlineSeven: string;
    iteminlineEight: string;
    providersbutton: string;
  }>;

const C1920WithoutSidebarFiveMenu: React.FC<
  C1920WithoutSidebarFiveMenuProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-[5px] items-start justify-start w-auto md:w-full">
          {!!props?.lobby ? (
            <Button
              className="cursor-pointer font-bold font-montserrat h-10 leading-[normal] min-w-[65px] text-center text-xs"
              shape="round"
              color="teal_400"
              size="md"
              variant="fill"
            >
              {props?.lobby}
            </Button>
          ) : null}
          <div className="flex flex-col h-10 md:h-auto items-center justify-center p-[13px] rounded w-auto">
            <Text
              className="text-center text-white-A700 text-xs w-auto"
              size="txtMontserratBold12"
            >
              {props?.iteminline}
            </Text>
          </div>
          <div className="flex flex-col h-10 md:h-auto items-center justify-center p-[13px] rounded w-auto">
            <Text
              className="text-center text-white-A700 text-xs w-auto"
              size="txtMontserratBold12"
            >
              {props?.iteminlineOne}
            </Text>
          </div>
          <div className="flex flex-col h-10 md:h-auto items-center justify-center p-[13px] rounded w-auto">
            {!!props?.iteminlineTwo ? (
              <Text
                className="text-center text-white-A700 text-xs w-auto"
                size="txtMontserratBold12"
              >
                {props?.iteminlineTwo}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-col h-10 md:h-auto items-center justify-center p-[13px] rounded w-auto">
            <Text
              className="text-center text-white-A700 text-xs w-auto"
              size="txtMontserratBold12"
            >
              {props?.iteminlineThree}
            </Text>
          </div>
          <div className="flex flex-col h-10 md:h-auto items-center justify-center p-[13px] rounded w-auto">
            <Text
              className="text-center text-white-A700 text-xs w-auto"
              size="txtMontserratBold12"
            >
              {props?.iteminlineFour}
            </Text>
          </div>
          <div className="flex flex-col h-10 md:h-auto items-center justify-center p-[13px] rounded w-auto">
            <Text
              className="text-center text-white-A700 text-xs w-auto"
              size="txtMontserratBold12"
            >
              {props?.iteminlineFive}
            </Text>
          </div>
          <div className="flex flex-col h-10 md:h-auto items-center justify-center p-[13px] rounded w-auto">
            <Text
              className="text-center text-white-A700 text-xs w-auto"
              size="txtMontserratBold12"
            >
              {props?.iteminlineSix}
            </Text>
          </div>
          <div className="flex flex-col h-10 md:h-auto items-center justify-center p-[13px] rounded w-auto">
            <Text
              className="text-center text-white-A700 text-xs w-auto"
              size="txtMontserratBold12"
            >
              {props?.iteminlineSeven}
            </Text>
          </div>
          <div className="flex flex-col h-10 md:h-auto items-center justify-center p-[13px] rounded w-auto">
            <Text
              className="text-center text-white-A700 text-xs w-auto"
              size="txtMontserratBold12"
            >
              {props?.iteminlineEight}
            </Text>
          </div>
        </div>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[120px]"
          rightIcon={
            <Img
              className="h-6"
              src="images/img_icon_general_arrowup.svg"
              alt="icon/general/arrow_up"
            />
          }
          shape="round"
          color="blue_gray_900"
          size="sm"
          variant="fill"
        >
          <div className="font-bold font-montserrat leading-[normal] text-center text-xs">
            {props?.providersbutton}
          </div>
        </Button>
      </div>
    </>
  );
};

C1920WithoutSidebarFiveMenu.defaultProps = {
  iteminline: "New",
  iteminlineOne: "Popular",
  iteminlineThree: "Live Casino",
  iteminlineFour: "Bonus Buy",
  iteminlineFive: "Jackpot",
  iteminlineSix: "Table Games",
  iteminlineSeven: "Bicoin Games",
  iteminlineEight: "Other",
  providersbutton: "Providers",
};

export default C1920WithoutSidebarFiveMenu;
