import React from "react";

import { Button, Img, Line, Text } from "components";
import Header4 from "components/Header4";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const SevenPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-[33px] items-center justify-start mx-auto pb-[87px] w-full">
        <Header4 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col gap-9 items-center justify-start max-w-[1264px] mx-auto md:px-5 w-full">
          <div className="h-[632px] relative w-full">
            <Img
              className="h-[632px] m-auto object-cover w-full"
              src="images/img_image96_152x304.png"
              alt="imageNinetySix"
            />
            <div className="absolute bottom-[0] flex flex-col gap-[22px] h-[263px] md:h-auto inset-x-[0] items-center justify-start max-w-[1264px] mx-auto shadow-bs3 w-full">
              <div className="flex flex-col items-center justify-start w-auto md:w-full">
                <Text
                  className="md:text-5xl text-[70px] text-white-A700 uppercase w-auto"
                  size="txtMontserratBlack70"
                >
                  Battle of the magicians
                </Text>
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 uppercase w-auto"
                  size="txtMontserratBlack50"
                >
                  €1000 Toutnament
                </Text>
              </div>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 uppercase w-auto"
                size="txtMontserratBlack32"
              >
                1-12 july 2022
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start max-w-[1264px] w-full">
            <Text
              className="text-gray-500 text-sm w-auto"
              size="txtMontserratMedium14"
            >
              Expired
            </Text>
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
              size="txtMontserratBold40"
            >
              Battle of the Magicians - €1000 Tournament
            </Text>
            <Text
              className="text-gray-500 text-sm w-auto"
              size="txtMontserratMedium14"
            >
              It’s time to put your magic to the test and grab a share of the
              €1000 we stashed in the chest.
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
            <Text
              className="text-sm text-white-A700 w-auto"
              size="txtMontserratBold14"
            >
              Prizepool
            </Text>
            <div className="bg-blue_gray-900_01 md:h-[250px] h-[302px] relative rounded-[5px] w-full">
              <div className="flex flex-col m-auto w-full">
                <div className="bg-blue_gray-800_05 flex flex-row gap-[43px] items-center justify-start mx-auto p-[15px] rounded-tl-[5px] rounded-tr-[5px] w-full">
                  <Text
                    className="ml-2.5 text-center text-sm text-white-A700"
                    size="txtMontserratBold14"
                  >
                    #
                  </Text>
                  <Text
                    className="mb-0.5 text-sm text-white-A700"
                    size="txtMontserratBold14"
                  >
                    Prize
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[302px] mb-auto ml-[63px] mt-[-52px] w-px z-[1]" />
              </div>
              <Line className="absolute bg-blue_gray-900 h-0.5 inset-x-[0] mx-auto rotate-[-90deg] top-[33%] w-full" />
              <Line className="absolute bg-blue_gray-900 h-0.5 inset-[0] justify-center m-auto rotate-[-90deg] w-full" />
              <Line className="absolute bg-blue_gray-900 bottom-[33%] h-0.5 inset-x-[0] mx-auto rotate-[-90deg] w-full" />
              <Line className="absolute bg-blue_gray-900 bottom-[17%] h-0.5 inset-x-[0] mx-auto rotate-[-90deg] w-full" />
              <div className="absolute flex flex-row gap-[46px] items-center justify-start left-[2%] top-[23%] w-[10%]">
                <Text
                  className="text-center text-sm text-white-A700"
                  size="txtMontserratRegular14"
                >
                  1
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtMontserratRegular14"
                >
                  €500 Cash
                </Text>
              </div>
              <div className="absolute flex flex-row gap-[45px] items-center justify-start left-[2%] top-[38%] w-[11%]">
                <Text
                  className="text-center text-sm text-white-A700"
                  size="txtMontserratRegular14"
                >
                  3
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtMontserratRegular14"
                >
                  €300 Cash
                </Text>
              </div>
              <div className="absolute bottom-[39%] flex flex-row gap-[43px] items-center justify-start left-[2%] w-[10%]">
                <Text
                  className="text-center text-sm text-white-A700"
                  size="txtMontserratRegular14"
                >
                  4
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtMontserratRegular14"
                >
                  €150 Cash
                </Text>
              </div>
              <div className="absolute bottom-[22%] flex flex-row gap-[45px] items-center justify-start left-[2%] w-[10%]">
                <Text
                  className="text-center text-sm text-white-A700"
                  size="txtMontserratRegular14"
                >
                  5
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtMontserratRegular14"
                >
                  €100 Cash
                </Text>
              </div>
              <div className="absolute bottom-[6%] flex flex-row gap-11 items-center justify-start left-[2%] w-[10%]">
                <Text
                  className="text-center text-sm text-white-A700"
                  size="txtMontserratRegular14"
                >
                  6
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtMontserratRegular14"
                >
                  €50 Cash
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start w-auto md:w-full">
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtMontserratBold14"
              >
                Prizepool
              </Text>
              <Text
                className="text-gray-500 text-sm w-auto"
                size="txtMontserratMedium14"
              >
                Just open one of your favourite slots and opt in through the
                promotional tool you can find next to the game.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center w-auto">
              <Button
                className="cursor-pointer font-bold h-[39px] leading-[normal] text-center text-sm w-36"
                shape="round"
                color="teal_400"
                size="md"
                variant="fill"
              >
                Play Now
              </Button>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start w-auto md:w-full">
              <a href="javascript:" className="text-sm text-white-A700 w-auto">
                <Text size="txtMontserratBold14">Terms and Conditions</Text>
              </a>
              <Text
                className="leading-[160.00%] text-gray-500 text-sm"
                size="txtMontserratMedium14"
              >
                <>
                  € 0.20 minimum bet requirement
                  <br />1 valid entry per household.
                  <br />
                  This campaign is open for all players and available on all
                  devices.
                </>
              </Text>
            </div>
          </div>
          <Line className="bg-blue_gray-700 h-px w-full" />
          <div className="flex flex-col gap-[33px] items-start justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[147px] items-start justify-between w-auto md:w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratBold16"
                >
                  Casino
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Games
                </Text>
                <Text
                  className="text-sm text-yellow-700 w-auto"
                  size="txtMontserratMedium14Yellow700"
                >
                  Winning Club
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Promotions
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Game Providers
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratBold16"
                >
                  Sports
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Home
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Live Events
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Sport Rules
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <a
                  href="javascript:"
                  className="text-base text-white-A700 w-auto"
                >
                  <Text size="txtMontserratBold16">Support</Text>
                </a>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Affiliate Program
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Responsible Gaming
                </Text>
                <a href="javascript:" className="text-gray-500 text-sm w-auto">
                  <Text size="txtMontserratMedium14">Contact Us</Text>
                </a>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  FAQ
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtMontserratBold16"
                >
                  About Winning
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  About Us
                </Text>
                <a href="javascript:" className="text-gray-500 text-sm w-auto">
                  <Text size="txtMontserratMedium14">Privacy Policy</Text>
                </a>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Cookie Policy
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  General Terms
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtMontserratMedium14"
                >
                  Bonus Terms
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <PaymentsDepositItem className="bg-gray-900 flex flex-row gap-[17px] items-center justify-between p-[7px] rounded-md w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-auto md:w-full">
              <Text
                className="text-base text-white-A700 w-[154px]"
                size="txtMontserratBold16"
              >
                Payment Methods
              </Text>
              <Img
                className="h-[60px] w-[1258px]"
                src="images/img_frame10403.svg"
                alt="frame10403"
              />
            </div>
            <div className="flex flex-col gap-[31px] items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-start justify-start max-w-[1264px] w-full">
                <Text
                  className="leading-[20.00px] max-w-[1210px] md:max-w-full text-gray-500 text-xs"
                  size="txtMontserratMedium12"
                >
                  Winning is operated by Dama N.V., a company registered and
                  established under the laws of Curacao. Dama N.V. is licensed
                  and regulated by Antillephone N.V. (license no.
                  8048/JAZ2020-013). Dama N.V.’s registration number is 152125
                  and its registered address is Julianaplein 36, Willemstad,
                  Curaçao. Friolion Limited is a subsidiary of Dama N.V., acting
                  as an Agent on behalf of Dama N.V., registered in Cyprus with
                  registered address Leandrou, 12A 3086, Limassol, Cyprus, and
                  registration number ΗΕ 419102. All payments with Paysafe are
                  made via Dama N.V. Winning © Copyright 2022.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[31%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                  <Img
                    className="h-5 w-[26px]"
                    src="images/img_user_gray_500.svg"
                    alt="user"
                  />
                  <Img
                    className="h-5 w-[69px]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Img
                    className="h-5 w-[154px]"
                    src="images/img_begambleaware.svg"
                    alt="begambleaware"
                  />
                  <Img
                    className="h-5 w-8"
                    src="images/img_television.svg"
                    alt="television"
                  />
                  <Img
                    className="h-5 md:h-auto object-cover w-5"
                    src="images/img_image60.png"
                    alt="imageSixty"
                  />
                </div>
              </div>
              <Text
                className="text-gray-500 text-xs w-auto"
                size="txtMontserratMedium12"
              >
                Winning.io © Copyright 2022. All rights reserved.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SevenPage;
