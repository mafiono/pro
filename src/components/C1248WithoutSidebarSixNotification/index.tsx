import React from "react";

import { Img, List, Text } from "components";

type C1248WithoutSidebarSixNotificationProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "dailyfreespins"
  | "freespinscounter"
  | "level"
  | "levelcounter"
  | "firstdepositbonOne"
  | "price"
  | "withdrawalsucceOne"
  | "btccounter"
  | "youvegotlootboxOne"
> &
  Partial<{
    dailyfreespins: string;
    freespinscounter: string;
    level: string;
    levelcounter: string;
    firstdepositbonOne: string;
    price: string;
    withdrawalsucceOne: string;
    btccounter: string;
    youvegotlootboxOne: string;
  }>;

const C1248WithoutSidebarSixNotification: React.FC<
  C1248WithoutSidebarSixNotificationProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[17px] items-center justify-center px-2 py-1 w-[252px]">
          <Img
            className="h-6 w-6"
            src="images/img_menuiconsnoti.svg"
            alt="menuiconsnoti"
          />
          <div className="flex flex-col items-start justify-center w-auto">
            <div className="flex flex-row items-center justify-between w-[171px]">
              <Text
                className="text-gray-200_90 text-xs w-auto"
                size="txtMontserratRomanRegular12"
              >
                {props?.dailyfreespins}
              </Text>
              <div className="bg-teal-400 h-2 outline outline-[2px] outline-teal-400_3d rounded-[50%] w-2"></div>
            </div>
            <Text
              className="text-sm text-white-A700 w-auto"
              size="txtMontserratRomanRegular14"
            >
              {props?.freespinscounter}
            </Text>
          </div>
        </div>
        <List
          className="flex flex-col gap-1 items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-row gap-[17px] items-center justify-center px-2 py-1 w-[252px]">
            <Img
              className="h-6 w-6"
              src="images/img_menuiconsnotifylevelup.svg"
              alt="menuiconsnotify"
            />
            <div className="flex flex-col items-start justify-center w-auto">
              <div className="flex flex-col items-center justify-between w-[171px]">
                <Text
                  className="text-gray-200_90 text-xs w-auto"
                  size="txtMontserratRomanRegular12"
                >
                  {props?.level}
                </Text>
              </div>
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtMontserratRomanRegular14"
              >
                {props?.levelcounter}
              </Text>
            </div>
          </div>
          <div className="bg-blue_gray-900 flex flex-row gap-[17px] items-center justify-center px-2 py-1 rounded w-[252px]">
            <Img
              className="h-6 w-6"
              src="images/img_menuiconsnotifybunus.svg"
              alt="menuiconsnotify"
            />
            <div className="flex flex-col items-start justify-center w-auto">
              <div className="flex flex-col items-center justify-between w-[171px]">
                <Text
                  className="text-gray-200_90 text-xs w-auto"
                  size="txtMontserratRomanRegular12"
                >
                  {props?.firstdepositbonOne}
                </Text>
              </div>
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtMontserratRomanRegular14"
              >
                {props?.price}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-[17px] items-center justify-center px-2 py-1 w-[252px]">
            <Img
              className="h-6 w-6"
              src="images/img_menuiconsnotifywithdrawal.svg"
              alt="menuiconsnotify"
            />
            <div className="flex flex-col items-start justify-center w-auto">
              <div className="flex flex-col items-center justify-between w-[171px]">
                <Text
                  className="text-gray-200_90 text-xs w-auto"
                  size="txtMontserratRomanRegular12"
                >
                  {props?.withdrawalsucceOne}
                </Text>
              </div>
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtMontserratRomanRegular14"
              >
                {props?.btccounter}
              </Text>
            </div>
          </div>
        </List>
        <div className="flex flex-row gap-[17px] h-16 md:h-auto items-center justify-center px-2 py-1 w-[252px]">
          <Img
            className="h-6 w-6"
            src="images/img_thumbsup_white_a700_24x24.svg"
            alt="thumbsup"
          />
          <div className="flex flex-col items-center justify-between w-[171px]">
            <Text
              className="text-sm text-white-A700 w-auto"
              size="txtMontserratRomanRegular14"
            >
              {props?.youvegotlootboxOne}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C1248WithoutSidebarSixNotification.defaultProps = {
  dailyfreespins: "Daily Freespins",
  freespinscounter: "50 Freespins",
  level: "Level",
  levelcounter: "Level 4",
  firstdepositbonOne: "First Deposit Bonus",
  price: "50% up to $700",
  withdrawalsucceOne: "Withdrawal Success",
  btccounter: "567.23 BTC",
  youvegotlootboxOne: "You’ve Got LootBox!",
};

export default C1248WithoutSidebarSixNotification;
