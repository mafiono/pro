import React from "react";

import { Img, Text } from "components";
import PaymentsDepositItem from "components/PaymentsDepositItem";

const FooterPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-montserrat gap-[33px] items-start justify-start mx-auto md:px-10 sm:px-5 px-[137px] py-9 w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-center max-w-[945px] mx-auto w-full">
          <header className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-center justify-center w-full">
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
          </header>
        </div>
        <div className="flex flex-col gap-[18px] items-start justify-start w-auto md:w-full">
          <Text
            className="text-base text-white-A700 w-[154px]"
            size="txtMontserratBold16"
          >
            Payment Methods
          </Text>
          <Img
            className="h-[100px] w-[908px]"
            src="images/img_frame10403.svg"
            alt="frame10403"
          />
        </div>
        <div className="flex flex-col items-center max-w-[945px] mx-auto w-full">
          <div className="flex flex-col gap-[31px] items-start justify-start max-w-[944px] w-full">
            <div className="flex flex-col items-start justify-start max-w-[944px] w-full">
              <Text
                className="leading-[20.00px] max-w-[890px] md:max-w-full text-gray-500 text-xs"
                size="txtMontserratMedium12"
              >
                Winning is operated by Dama N.V., a company registered and
                established under the laws of Curacao. Dama N.V. is licensed and
                regulated by Antillephone N.V. (license no. 8048/JAZ2020-013).
                Dama N.V.’s registration number is 152125 and its registered
                address is Julianaplein 36, Willemstad, Curaçao. Friolion
                Limited is a subsidiary of Dama N.V., acting as an Agent on
                behalf of Dama N.V., registered in Cyprus with registered
                address Leandrou, 12A 3086, Limassol, Cyprus, and registration
                number ΗΕ 419102. All payments with Paysafe are made via Dama
                N.V. Winning © Copyright 2022.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[41%] md:w-full">
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
    </>
  );
};

export default FooterPage;
