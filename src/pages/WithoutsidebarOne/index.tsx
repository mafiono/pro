import React from "react";

import { Button, Img, Line, List, Text } from "components";
import C1920WithoutSidebarFiveProvidercard from "components/C1920WithoutSidebarFiveProvidercard";
import C1920WithoutSidebarOnePagination from "components/C1920WithoutSidebarOnePagination";
import Header1 from "components/Header1";
import PWAOneGamecard from "components/PWAOneGamecard";
import PWAOneGamecard1 from "components/PWAOneGamecard1";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const WithoutsidebarOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-[21px] items-center justify-start mx-auto w-full">
        <Header1 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col gap-9 items-start justify-start max-w-[1264px] mx-auto md:px-5 w-full">
          <div className="bg-gray-900 flex flex-row md:gap-10 items-center justify-between max-w-[1264px] p-1 rounded-md w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[89px]"
                leftIcon={
                  <Img
                    className="h-6 mr-2.5"
                    src="images/img_icon_general_arrowsmallleft.svg"
                    alt="icon/general/arrow-small-left"
                  />
                }
                shape="round"
                color="blue_gray_900"
                size="sm"
                variant="fill"
              >
                <div className="font-bold leading-[normal] text-center text-xs">
                  New
                </div>
              </Button>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[120px]"
              rightIcon={
                <Img
                  className="h-6 ml-2.5"
                  src="images/img_icon_general_arrowup.svg"
                  alt="icon/general/arrow_up"
                />
              }
              shape="round"
              color="blue_gray_900"
              size="sm"
              variant="fill"
            >
              <div className="font-bold leading-[normal] text-center text-xs">
                Providers
              </div>
            </Button>
          </div>
          <div className="flex flex-col gap-6 items-center justify-end w-auto md:w-full">
            <List
              className="flex flex-col gap-6 items-center w-full"
              orientation="vertical"
            >
              <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 items-start justify-start w-auto md:w-full">
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten.png"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_1.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_3.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_4.png"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_5.png"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 items-start justify-start w-auto md:w-full">
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten.png"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_1.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_3.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_4.png"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_5.png"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 items-start justify-start w-auto md:w-full">
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten.png"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_1.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_3.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_4.png"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_5.png"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 items-start justify-start w-auto md:w-full">
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten.png"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_1.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_3.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_4.png"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_5.png"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 items-start justify-start w-auto md:w-full">
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten.png"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1 className="md:h-[198px] h-[200px] relative rounded-md w-full" />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_1.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_3.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_4.png"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                  <PWAOneGamecard1
                    className="md:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten.png"
                  />
                  <PWAOneGamecard
                    className="md:h-[148px] sm:h-[198px] h-[200px] relative rounded-md w-full"
                    userimage="images/img_notombofakhenaten_5.png"
                    iconcyrrentybtc="images/img_iconcyrrentybtc.svg"
                    priceOne="EUR 8.000.000"
                  />
                </div>
              </div>
            </List>
            <Button
              className="cursor-pointer font-bold h-10 leading-[normal] min-w-[97px] text-center text-xs"
              shape="round"
              color="blue_gray_900_01"
              size="md"
              variant="fill"
            >
              Show More
            </Button>
            <C1920WithoutSidebarOnePagination className="flex flex-col gap-3 items-center justify-start w-auto" />
          </div>
          <div className="flex flex-col gap-[13px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1264px] w-full">
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtMontserratBold16"
              >
                Game Providers
              </Text>
              <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                <Button
                  className="flex h-[35px] items-center justify-center rounded-[3px] w-[35px]"
                  shape="round"
                  color="blue_gray_900_01"
                  size="md"
                  variant="fill"
                >
                  <Img
                    src="images/img_arrowdown_gray_600.svg"
                    alt="arrowdown_One"
                  />
                </Button>
                <Button
                  className="flex h-[35px] items-center justify-center rounded-[3px] w-[35px]"
                  shape="round"
                  color="blue_gray_900_01"
                  size="md"
                  variant="fill"
                >
                  <Img src="images/img_arrowleft.svg" alt="arrowleft" />
                </Button>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[50px] rounded-[3px] text-center text-sm"
                  shape="round"
                  color="blue_gray_900_01"
                  size="sm"
                  variant="fill"
                >
                  All
                </Button>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              {new Array(8).fill({}).map((props, index) => (
                <React.Fragment
                  key={`C1920WithoutSidebarFiveProvidercard${index}`}
                >
                  <C1920WithoutSidebarFiveProvidercard
                    className="bg-blue_gray-900_01 flex flex-col h-36 items-center justify-end p-[11px] rounded-md w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
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

export default WithoutsidebarOnePage;
