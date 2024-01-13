import React from "react";

import { Button, Img, Line, List, Text } from "components";
import C1920ButtonOpenArchiveCardpromotion from "components/C1920ButtonOpenArchiveCardpromotion";
import C1920ButtonOpenArchiveCardpromotion1 from "components/C1920ButtonOpenArchiveCardpromotion1";
import C1920ButtonOpenArchiveCardpromotion2 from "components/C1920ButtonOpenArchiveCardpromotion2";
import Header4 from "components/Header4";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const OpenarchivewithcomplitedpromoPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-[31px] items-center justify-start mx-auto pb-[124px] w-full">
        <Header4 className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex flex-col gap-9 items-center justify-start max-w-[1264px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
            size="txtMontserratBold40"
          >
            Promotions
          </Text>
          <div className="flex flex-col gap-9 items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="gap-14 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <C1920ButtonOpenArchiveCardpromotion className="flex flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-full" />
                <C1920ButtonOpenArchiveCardpromotion1 className="flex flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-full" />
                <C1920ButtonOpenArchiveCardpromotion2 className="flex flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-full" />
                <C1920ButtonOpenArchiveCardpromotion className="flex flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-full" />
                <C1920ButtonOpenArchiveCardpromotion1 className="flex flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-full" />
                <C1920ButtonOpenArchiveCardpromotion2 className="flex flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-full" />
                <C1920ButtonOpenArchiveCardpromotion className="flex flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-full" />
                <C1920ButtonOpenArchiveCardpromotion1 className="flex flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-full" />
                <C1920ButtonOpenArchiveCardpromotion2 className="flex flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-full" />
                <C1920ButtonOpenArchiveCardpromotion className="flex flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-full" />
                <C1920ButtonOpenArchiveCardpromotion1 className="flex flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-full" />
                <C1920ButtonOpenArchiveCardpromotion2 className="flex flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-full" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-auto">
              <Button
                className="cursor-pointer font-bold h-[39px] leading-[normal] text-center text-sm w-36"
                shape="round"
                color="gray_500"
                size="md"
                variant="fill"
              >
                Show less
              </Button>
            </div>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <List
                className="sm:flex-col flex-row gap-14 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1264px] w-full"
                orientation="horizontal"
              >
                <C1920ButtonOpenArchiveCardpromotion
                  className="flex sm:flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-96 sm:w-full"
                  promotiondate="Completed"
                />
                <C1920ButtonOpenArchiveCardpromotion1
                  className="flex sm:flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-[385px] sm:w-full"
                  p112july2022="Completed"
                />
                <C1920ButtonOpenArchiveCardpromotion2
                  className="flex sm:flex-1 flex-col gap-4 h-[250px] md:h-auto items-start justify-start w-96 sm:w-full"
                  noexpirydatetext="Completed"
                />
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
                  <a
                    href="javascript:"
                    className="text-gray-500 text-sm w-auto"
                  >
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
                  <a
                    href="javascript:"
                    className="text-gray-500 text-sm w-auto"
                  >
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
                    Curaçao. Friolion Limited is a subsidiary of Dama N.V.,
                    acting as an Agent on behalf of Dama N.V., registered in
                    Cyprus with registered address Leandrou, 12A 3086, Limassol,
                    Cyprus, and registration number ΗΕ 419102. All payments with
                    Paysafe are made via Dama N.V. Winning © Copyright 2022.
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
      </div>
    </>
  );
};

export default OpenarchivewithcomplitedpromoPage;
